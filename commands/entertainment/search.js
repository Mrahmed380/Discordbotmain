const cheerio = require('cheerio')
const request = require('request');
const { Client , MessageEmbed } = require('discord.js');
module.exports={
    name: 'search',
    category: 'entertainment',
    description: 'searches any image on the web',
    usage: 'e!search <object>',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        var parts = message.content.split(" ");
        if (parts[0] === "e!search") {
            image(message, parts);
        }
        function image(message, parts) {
 
         
            var search = parts.slice(1).join(" "); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"
         
            var options = {
                url: "https://www.google.com/search?q=" + search + "&rlz=1C1CHBF_enUS862US870&sxsrf=ALeKk02a_FPLHKpcizMPZZzw6SP0SBPIwA:1593118670496&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjfgcLD7Z3qAhUHpp4KHdzLBa4Q_AUoAXoECBkQAw&biw=1920&bih=969",
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
            };
            request(options, function(error, response, responseBody) {
                if (error) {
                    // handle error
                    return;
                }
         
                /* Extract image URLs from responseBody using cheerio */
         
                $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
         
                // In this search engine they use ".image a.link" as their css selector for image links
                var links = $(".image a.link");
         
                // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
                // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
                var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
                console.log(urls);
                if (!urls.length) {
                    // Handle no results
                    return;
                }
         
                // Send result
                message.channel.send( urls[0] );
            });
         
        }
    }
}