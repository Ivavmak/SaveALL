const grabBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click",() => { 
    chrome.bookmarks.create(
        {'title': document.getElementById("textbox_id").value},
        function(newFolder) {
            chrome.tabs.query({currentWindow: true},function(tabs){     
                tabs.forEach(function(tab){
                    chrome.bookmarks.create({
                        'parentId': newFolder.id,
                        'title': tab.title,
                        'url': tab.url,
                    });
                });
            });
        },
    );   
})