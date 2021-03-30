# used to auto transfer much of the content

root_from <- "site/files/munitions_library"
root_to <- "website/content/munitions"

mns <- list.files(root_from)


options("encoding" = "native.enc")
muns <- read.csv("munitions.csv")

for(i in 1:48){
  row_in <- which(muns$folder == as.numeric(mns[i]))
  alias <- muns$alias[row_in]
  descrip <- muns$description[row_in]
  title <- muns$name[row_in]
  featured <- muns$item_image[row_in]
  manufacturer_link <- muns$manufacturer_weblink[row_in]
  manufacturer <- muns$manufacturer[row_in]
  product_link <- muns$weblink[row_in]
  sds_link <- muns$safety_data_sheet[row_in]
  spec_link <- muns$spec_sheet[row_in]
  item <- muns$item_number[row_in]

  class <- muns$class[row_in]
  type <- muns$type[row_in]

  from <- paste0(root_from, "/", mns[i])
  to <- paste0(root_to, "/", alias)
  dir.create(to)

  dir.create(paste0(root, "/", alias, "/files"))
  img_from <- paste0(from, "/", featured)
  img_to <- paste0(to, "/featured.jpg")
  file.copy(img_from, img_to)

  sds_from <- paste0(from, "/", sds_link)
  sds_to <- paste0(to, "/files/sds.pdf")
  file.copy(sds_from, sds_to)

  sds_link <- paste0("munitions/", alias, "/files/sds.pdf") 

  spec_from <- paste0(from, "/", spec_link)
  spec_to <- paste0(to, "/files/spec_sheet.pdf")
  file.copy(spec_from, spec_to)

  spec_link <- paste0("munitions/", alias, "/files/spec_sheet.pdf") 

  alt_text_file <- paste0(from, "/alt_", featured, ".txt")
  alt_text <- scan(alt_text_file, what = "character")

  agents <- c("OC", "PAVA", "CS", "Terephthalic.Acid", "Hexachloroethane", 
              "Paint", "Silica")
  cols_in <- colnames(muns) %in% agents
  row_agents <- muns[row_in, cols_in]
  nagents <- sum(row_agents)
  if(nagents > 0){
    agents <- colnames(row_agents)[muns[row_in, cols_in] == 1]
    agent_tags <- paste(paste0("- ", agents, " \n"), collapse = "")
    contents <- paste0(" and containing ", paste(agents, collapse = ", "))
  } else{
    agent_tags <- "\n"
    contents <- ""
  }
  if(item == ""){
    item_no <- ""
  }else {
    item_no <- paste0("item: ", item, " ")
  }  


  main_body <- paste0(title, "; ", item_no, descrip, " by ", manufacturer,
                      contents)

  index <- paste0("--- \naliases: [", alias,"] \ntitle: ", title," \nsummary: ", descrip," \ntags:  \n- ", class, " \n- ", type, " \n", agent_tags, "- ", manufacturer, " \nshare: false \nlinks:  \n- icon: globe \n  icon_pack: fas \n  name: Manufacturer \n  url: ", manufacturer_link, " \n- icon: globe \n  icon_pack: fas \n  name: Product \n  url: ", product_link, " \n- icon: archive \n  icon_pack: fas \n  name: Safety Sheet \n  url: ", sds_link, " \n- icon: archive \n  icon_pack: fas \n  name: Spec Sheet \n  url: ", spec_link, " \nimage: \n  alt_text: ", alt_text, " \n---\n", main_body)
  options("encoding" = "UTF-8")
  write(index, file = paste0(to, "/index.md"))
}



options("encoding" = "native.enc")