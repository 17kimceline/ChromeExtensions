// popup js for corgi extension

// array of URLS to corgi images
var corgiArray = ["https://peopledotcom.files.wordpress.com/2016/10/44.jpg",
						"https://tinyurl.com/yakjsxbr",
					    "https://tinyurl.com/ya9byjej",
						"https://i.pinimg.com/originals/f6/ec/f8/f6ecf8b25ddb240534594f3f5c185ee4.jpg",
						"https://pbs.twimg.com/profile_images/881695717609295872/qXiHbPiX_400x400.jpg",
					   	"http://trupanion.com/blog/wp-content/uploads/2017/09/GettyImages-512536165.jpg",
					    "https://i.imgur.com/o8v5fF0.jpg",
					    "https://i.imgur.com/sY9k49a.jpg",
					    "https://images.fineartamerica.com/images-medium-large-5/happiness-is-a-warm-corgi-puppy-rebecca-sherman.jpg",
					    "http://cdn2-www.dogtime.com/assets/uploads/gallery/corgi-puppies/corgi-puppy-12.jpg",
					    "https://tinyurl.com/ybp277q5",
					    "https://i.pinimg.com/736x/8b/2d/fb/8b2dfb85dce16477a889f38fcc8c3463--corgi-puppies-welsh-corgi-puppy.jpg",
					    "https://3milliondogs.com/blog-assets-two/2014/11/cute-corgi.jpg",
					    "https://pbs.twimg.com/media/DLmGCILUMAEO6ix.jpg"
					   ];
function giveCorgi()
{

	var random = Math.floor(Math.random()*corgiArray.length);
	window.open(corgiArray[random]);
	window.focus();
	chrome.tabs.create({url:corgiArray[random]});
}
function giveSadCorgi()
{
	var myWindow = window.open("http://gifimage.net/wp-content/uploads/2017/01/Crying-Meme-GIF-Image-for-Whatsapp-and-Facebook-33-300x200.gif");
	//myWindow.document.write("<p>You get a sad corgi</p>");
	window.focus

}

document.getElementById("yesButton").addEventListener('click', giveCorgi);
document.getElementById("noButton").addEventListener('click', giveSadCorgi);