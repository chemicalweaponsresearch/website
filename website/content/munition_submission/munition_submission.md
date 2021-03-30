---
summary: "Munitions Submissions"
widget: blank
active: true
headless: true
weight: 1
title:
subtitle:
design:
  columns: "1"
  spacing:
    padding: ["50px", "0", "50px", "0"]
---

# Submit Munitions Photos

<br>
<small>

We are a consortium of researchers [studying the impacts of chemical weapons](https://www.dapperstats.com/project/chemical_weapons/) use by law enforcement agencies in Portland, OR. 

The extended use of chemical weapons (gasses, smokes, etc.) has already had a noticeable impact on the ecology of our city; we want to do what we can to swiftly mitigate the impact on human and environmental health. 
Our long-term goal is to assess the likely impact of these residues on local ecosystems and mitigate the damage as much as possible.

That is where you come in: we need you to be our eyes, ears, and cameras around the city! 

We want your photographs of:  
- chemical weapons recovered at the scene of a PDX protest  
- chemical weapons while they are being deployed

We are especially interested in photos accompanied by date, time, and location information, or any other context you can share. 
If you have thoughts or interpretations, we are happy to hear those as well. 
Our only requirement is that you include at least one photo of the item in each report.

Photos can be from any time during the 2020-2021 protests in Portland Oregon.

**WHERE WILL MY REPORT GO?**

Form submissions are managed securely via [Netlify](https://www.netlify.com/) by [DAPPER Stats](https://dapperstats.com), the company of lead researcher Dr. Juniper L. Simonis (they/them).

Observations will be collated and made publicly available on [our website](https://www.chemicalweaponsresearch.com).
We will remove identifying information from all text and photos before sharing any part of your report. 
Photos will only be used for research and education purposes.
If you would like to be credited if your photos are used, please note that below.

If you have any questions or concerns contact lead researcher [Dr. Juniper L. Simonis (they/them)](mailto:chemicalweaponsresearch@protonmail.com).

If you would prefer to submit your report via secure email instead, please send the photo and accompanying information to [chemicalweaponsresearch@protonmail.com](mailto:chemicalweaponsresearch@protonmail.com).

<br>


{{< figure src="submission_examples.png" alt="Nine examples of munition photos arranged in a 3x3 grid; top row from the left: three SAF Smoke triple chaser grenade parts, the top of a triple chaser grenade, the grenade's smoke; the middle from the left: front, back, and bottom of a CS Instantaneous Blast grenade; bottom row from the left: intact powder balls and powder ball fragments, impact of a powder ball close up in the road, pulled back shot of multiple powder ball impacts in the road" width="50%">}}


<br>

<form name="munitions" method="POST" data-netlify="true">
  <p>
    <font size="+3">Consent</font>
  </p>
  <p>
    <label>
      By checking this box, you are consenting to the researchers using the information and media files you submit via this form to conduct scientific research and produce public outreach materials. (Required)
    </label> 
    <br> 
    <input type="checkbox" name="consent" required/> &nbsp;
    I agree
  </p>
  <br>
  <p>
    <font size="+3">
      Munitions Record
    </font>
  </p>
  <p>
    Please fill out as many of the fields below as you can
  </p>
  <br>
  <p>
    <font size="+2">
      Weapon
    </font>
  </p>
  <p>
    <label>
      Photographs (Required)
    </label>
    <br>
    <em>
      If possible, all sides of the weapon and any identifying numbers.  
      Multiple photos should be uploaded together.
    </em>
    <input type="file" id="munition_photos" name="munitions_photos" multiple required/>
    <br>
  </p>
  <p>
    <label>
      Manufacturer
    </label>
      <br>
      <em>
        Example: Defense Technology
      </em>
    <br>
    <input type="text" id="manufacturer" name="manufacturer"/>
    <br>
  </p>
  <p>
    <label>
      Product name
    </label>
      <br>
      <em>
        Example: Triple Chaser SAF Smoke Grenade
      </em>
    <br>
    <input type="text" id="product" name="product"/>
    <br>
  </p>
  <p>
    <label>
      Manufacture date
    </label>
      <br>
      <em>
        Example: 2007
      </em>
    <br>
    <input type="text" id="manufacture_date" name="manufacture_date"/>
    <br>
  </p>
  <p>
    <label>
      Shelf life (years)
    </label>
      <br>
      <em>
        Example: 5
      </em>
    <br>
    <input type="text" id="shelf_life" name="shelf_life"/>
    <br>
  </p>
  <p>
    <label>
      Lot number
    </label>
      <br>
      <em>
        Example: 12399
      </em>
    <br>
    <input type="text" id="shelf_life" name="shelf_life"/>
    <br>
  </p>
  <p>
    <label>
      Text on the weapon
    </label>
      <br>
      <em>
        Example: Only to be used by trained officers
      </em>
    <br>
    <input type="text" id="weapon_text" name="weapon_text"/>
    <br>
  </p>


  <br>
  <p>
    <font size="+2">
      Deployment
    </font>
  </p>
  <p>
    <label>
      Photographs of the weapon being deployed or going off
    </label>
    <br> 
    <em>
      Multiple photos should be uploaded together.
    </em>
    <input type="file" id="deployment_photos" name="deployment_files" multiple/>
    <br>
  </p>
  <p>
    <label>
      Date/time deployed
    </label>
      <br>
      <em>
        Example: July 26th 2020, 10 PM
      </em>
    <br>
    <input type="text" id="date_time_deployed" name="date_time_deployed"/>
    <br>
  </p>
  <p>
    <label>
      Did you observe a person deploying this weapon?
    </label>
    <br>
    <input type="radio" id="yes" name="in_deployment"/>
    <label for="yes">
      <font size="-1">
        Yes
      </font>
    </label>
    <br>
    <input type="radio" id="maybe" name="in_deployment"/>
    <label for="maybe">
      <font size="-1">
        I think so but couldn't see it clearly
      </font>
    </label>
    <br>
    <input type="radio" id="no" name="in_deployment" checked/>
    <label for="no">
      <font size="-1">
        No
      </font>
    </label>
  </p>
  <p>
    <label>
      Individual agent deploying weapon 
    </label>
    <br>
    <em>
      Name, badge number, helmet number
    </em>
    <br>
    <input type="text" id="deployer" name="deployer"/>
  </p>
  <p>
    <label>
      Agency deploying weapon
    </label>
    <br>
    <input type="radio" id="unknown" name="agency_deploying" checked/>
    <label for="unknown">
      <font size="-1">
        Unknown
      </font>
    </label>
    <br>
    <input type="radio" id="ppb" name="agency_deploying"/>
    <label for="ppb">
      <font size="-1">
        Portland Police Bureau
      </font>
    </label>
    <br>
    <input type="radio" id="mcso" name="agency_deploying"/>
    <label for="mcso">
      <font size="-1">
        Multnomah County Sheriff's Office
      </font>
    </label>
    <br>
    <input type="radio" id="osp" name="agency_deploying"/>
    <label for="osp">
      <font size="-1">
        Oregon State Police
      </font>
    </label>
    <br>
    <input type="radio" id="dhs" name="agency_deploying"/>
    <label for="dhs">
      <font size="-1">
        Department of Homeland Security (ICE, CBP, FPS)
      </font>
    </label>
    <br>
    <input type="radio" id="doj" name="agency_deploying"/>
    <label for="doj">
      <font size="-1">
        Department of Justice (Marshals, FBI)
      </font>
    </label>
    <br>
    <input type="radio" id="armed_services" name="agency_deploying"/>
    <label for="armed_services">
      <font size="-1">
        Armed Services (National Guard, Army)
      </font>
    </label>
    <br>
    <input type="radio" id="civilian" name="agency_deploying"/>
    <label for="civilian">
      <font size="-1">
        Civilian group
      </font>
    </label>
    <br>
    <input type="radio" id="other" name="agency_deploying"/>
    <label for="other">
      <font size="-1">
        Other (please name): 
         <input type="text" id="other_name" name="other_agency_deploying"/>
      </font>
    </label>
    <br>
  </p>
  <br>
  <p>
    <font size="+2">
      Recovery
    </font>
  </p>
  <p>
    <label>
      Date/time found
    </label>
      <br>
      <em>
        Example: July 27th 2020, after 1 AM
      </em>
    <br>
    <input type="text" id="date_time_found" name="date_time_found"/>
    <br>
  </p>
  <p>
    <label>
      Location found
    </label>
      <br>
      <em>
      Nearest intersection, address, GPS, park name, etc.
      </em>
    <br>
    <input type="text" id="location_found" name="location_found"/>
    <br>
  </p>
  <br>
  <p>
    <font size="+2">
      Additional Information
    </font>
  </p>
  <p>
    <label>
      Any other relevant information you'd like to share
    </label>
    <br>
    <em>
      Uncertainty about date found or deployed, links to tweets, context of the usage, your body's reaction to this weapon, your contact information
    </em>
    <textarea name="narrative">
    </textarea>
    <br>
  </p>
  <p>
    <label>
      Credit
    </label>
      <br>
      <em>
      If you would like to be credited for photos, let us know how to refer to you.
      </em>
    <br>
    <input type="text" id="credit" name="credit"/>
    <br>
  </p>
  <br>
  <p>
    <button type="submit">
      Submit photos
    </button>
  </p>
</form>

<br>
</small>