# GAS-ICS-Sync

This is a standalone script (that consists of multiple files). The purpose is to sync ics/ical calendars to Google Calendar. Google Calendar *can* already do this, but updates only happen once every 12 or even 24 hrs. This script can be run much more frequently.

[If you want to use this, please copy the script from here](https://script.google.com/d/1BOk8MDLbLaHh6SwG1M1tsgNXjkcC-79LE0QoipRuTDxbO3fMVvqoROQD/edit?newcopy=true)

**To make a copy in the new Google Apps Script interface:**
1. Go to the project overview icon on the left (looks like this: ⓘ)
2. Click the "copy" icon on the top right (looks like two files on top of each other)

**NOTE:** If too many people are accessing the file at the same time, Google may lock you out. You can follow these instructions to set up the script: https://github.com/derekantrican/GAS-ICS-Sync/wiki/Setting-up-the-script-manually

---------------

### Using credentials

Replace this function in `Helpers.gs` on line 74 by:

```javascript
function fetchSourceCalendars(sourceCalendarURLs){
  var result = []
  for (var url of sourceCalendarURLs){
    url = url.replace("webcal://", "https://");
    
    callWithBackoff(function() {
      var urlResponse = UrlFetchApp.fetch(url, {
        'validateHttpsCertificates' : true,
        "headers": {
            "Authorization": "Basic " + Utilities.base64Encode("USERNAME:PASSWORD")
          }
        });
      if (urlResponse.getResponseCode() == 200){
        var urlContent = urlResponse.getContentText();
        if(!urlContent.includes("BEGIN:VCALENDAR")){
          Logger.log("[ERROR] Incorrect ics/ical URL: " + url);
          return;
        }
        else{
          result.push(urlContent);
          Logger.log("Result: " + result.length);
          return;
        }     
      }
      else{ //Throw here to make callWithBackoff run again
        throw "Error: Encountered " + urlReponse.getReponseCode() + " when accessing " + url; 
      }
    }, defaultMaxRetries);
  }
  
  return result;
}
```

---------------

### Questions? Comments? Anything else?
[Join the Discord!](https://discord.gg/DRBpb4k)

![Discord](https://img.shields.io/discord/612735135120490496)

----------------

### Contributing

If you would like to contribute to this repository, please fork the repository, make your changes, and start a pull request. If your pull request is approved, I will add you as a contributer directly to the repository


**If you would like to fund an issue, you can do that through here: https://issuehunt.io/repos/136078981/**
