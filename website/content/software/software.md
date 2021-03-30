+++
widget = "portfolio"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true 
active = true  
weight = 2
date = ""
title = ""
subtitle = ""
link_author = false

[content]
  page_type = "code"
  
  # Filter toolbar (optional).
  # Add or remove as many filters (`[[content.filter_button]]` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove toolbar, delete/comment all instances of `[[content.filter_button]]` below.
  
  # Default filter index (e.g. 0 corresponds to the first `[[filter_button]]` instance below).
  filter_default = 0
  
  [[content.filter_button]]
    name = "All"
    tag = "*"
  
  [[content.filter_button]]
    name = "Code Packages"
    tag = "package"
  
  [[content.filter_button]]
    name = "Applications"
    tag = "application"

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"

  # Toggle between the various page layout types.
  #   1 = List
  #   2 = Compact
  #   3 = Card
  #   5 = Showcase
  view = 3

  # For Showcase view, flip alternate rows?
  flip_alt_rows = true

[design.spacing]
  # Customize the section spacing. Order is top, right, bottom, left.
  padding = ["15px", "0", "0px", "0"] 
  
[advanced]
 # Custom CSS. 
 css_style = ""
 
 # CSS class.
 css_class = ""
+++

