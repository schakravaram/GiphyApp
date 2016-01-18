
// Iterate throught the object obtained from Giphy, then filter and pick the required attributes for the user

module.exports = {
    
    GetRequired : function (items) {
        
        var giphyObjects = [];
        for (var i = 0; i <= items.length - 1; i++) {
            try {
                giphyObjects.push({
                    id: items[i].id, 
                    fxHiImgUrl: items[i].images.fixed_height.url,
                    fxHiStillImgUrl: items[i].images.fixed_height_still.url,
                    width: items[i].images.fixed_height.width,
                    height: items[i].images.fixed_height.height
                });
            } catch (ex) { 
                giphyObjects = [];
            }
        }
        
        return giphyObjects;
    }
}