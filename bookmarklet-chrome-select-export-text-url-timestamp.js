javascript:(function(){let text=window.getSelection().toString();let url=window.location.href;let time = new Date().toISOString();let keywords = prompt('Please enter keywords to tag this bookmarklet');let file=new Blob([text+'\n'+url+'\n'+time+'\n'+keywords],{type:'text/plain'});let a=document.createElement('a');a.href=URL.createObjectURL(file);a.download='bookmarklet.txt';a.click();})();
