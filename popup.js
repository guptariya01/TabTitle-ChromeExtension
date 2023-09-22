document.addEventListener("DOMContentLoaded", function () 
{   
    document.getElementById("getTitleButton").addEventListener("click", function () 
    {     
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) 
      {       
        const tab = tabs[0];
        const title = tab.title;        
        document.getElementById("titleDisplay").textContent = `Tab Title: ${title}`;
      });
    });
  });
  