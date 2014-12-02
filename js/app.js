
(function() {
	var app = angular.module('postArchive', []);
	
	/*app.controller('PostController', function(){
    	this.photos = photoCall;
    	this.posts = postsCall;
  	});



	var photoCall = [
	{
		"caption": "Photo 1",
		"likes": 4,
		"photo-date": "10/12/13"
	},
	{
		"caption": "Photo 2",
		"likes": 5,
		"photo-date": "2/12/14"
	},
	{
		"caption": "Photo 3",
		"likes": 6,
		"photo-date": "8/12/14"
	}
	];
	
	var postsCall = [
	{
		blog_name: "mydailygraphics",
		id: 47617980963,
		post_url: "http://mydailygraphics.tumblr.com/post/47617980963/let-the-sunshine-in-official-clip-par",
		slug: "let-the-sunshine-in-official-clip-par",
		type: "video",
		date: "2013-04-10 13:20:52 GMT",
		timestamp: 1365600052,
		state: "published",
		format: "html",
		reblog_key: "RwDNdPCT",
		tags: [ ],
		short_url: "http://tmblr.co/Z-x6OyiMGBeZ",
		highlighted: [ ],
		bookmarklet: true,
		note_count: 0,
		source_url: "http://www.youtube.com/watch?v=XjofWPYFGvg&feature=share",
		source_title: "youtube.com",
		caption: "<p>LET THE SUNSHINE IN [OFFICIAL CLIP] (par <a href=\"http://www.youtube.com/watch?v=XjofWPYFGvg&amp;feature=share\" target=\"_blank\">BensimonBrand</a>)</p>",
		permalink_url: "https://www.youtube.com/watch?v=XjofWPYFGvg",
		html5_capable: true,
		thumbnail_url: "https://i.ytimg.com/vi/XjofWPYFGvg/hqdefault.jpg",
		thumbnail_width: 480,
		thumbnail_height: 360,
		player: [
		{
			width: 250,
		embed_code: "<iframe width=\"250\" height=\"140\" src=\"https://www.youtube.com/embed/XjofWPYFGvg?feature=oembed\" frameborder=\"0\" allowfullscreen></iframe>"
		},
		{
			width: 400,
		embed_code: "<iframe width=\"400\" height=\"225\" src=\"https://www.youtube.com/embed/XjofWPYFGvg?feature=oembed\" frameborder=\"0\" allowfullscreen></iframe>"
		},
		{
			width: 500,
		embed_code: "<iframe width=\"500\" height=\"281\" src=\"https://www.youtube.com/embed/XjofWPYFGvg?feature=oembed\" frameborder=\"0\" allowfullscreen></iframe>"
		}
		],
		video_type: "youtube"
		},
		{
			blog_name: "mydailygraphics",
			id: 19952024629,
			post_url: "http://mydailygraphics.tumblr.com/post/19952024629",
			slug: "",
			type: "photo",
			date: "2012-03-26 13:25:02 GMT",
			timestamp: 1332768302,
			state: "published",
			format: "html",
			reblog_key: "RUkC6ivG",
			tags: [ ],
			short_url: "http://tmblr.co/Z-x6OyIbExmr",
			highlighted: [ ],
			note_count: 9823,
			source_url: "http://ehhhr.tumblr.com/",
			source_title: "ehhhr",
			caption: "",
			link_url: "http://the-rocket-summer.tumblr.com/",
			image_permalink: "http://mydailygraphics.tumblr.com/image/19952024629",
			photos: [
			{
				caption: "",
				alt_sizes: [
				{
					width: 494,
					height: 700,
					url: "http://36.media.tumblr.com/tumblr_m13g6hQCS01qeyeq5o1_500.jpg"
				},
				{
					width: 400,
					height: 567,
					url: "http://40.media.tumblr.com/tumblr_m13g6hQCS01qeyeq5o1_400.jpg"
				},
				{
					width: 250,
					height: 354,
					url: "http://41.media.tumblr.com/tumblr_m13g6hQCS01qeyeq5o1_250.jpg"
				},
				{
					width: 100,
					height: 142,
					url: "http://40.media.tumblr.com/tumblr_m13g6hQCS01qeyeq5o1_100.jpg"
				},
				{
					width: 75,
					height: 75,
					url: "http://41.media.tumblr.com/tumblr_m13g6hQCS01qeyeq5o1_75sq.jpg"
				}
				],
				original_size: {
					width: 494,
					height: 700,
					url: "http://36.media.tumblr.com/tumblr_m13g6hQCS01qeyeq5o1_500.jpg"
				}
			}
			]
		},
		{
			blog_name: "mydailygraphics",
			id: 19952013306,
			post_url: "http://mydailygraphics.tumblr.com/post/19952013306",
			slug: "",
			type: "photo",
			date: "2012-03-26 13:24:28 GMT",
			timestamp: 1332768268,
			state: "published",
			format: "html",
			reblog_key: "2MuCyXC4",
			tags: [ ],
			short_url: "http://tmblr.co/Z-x6OyIbEu-w",
			highlighted: [ ],
			note_count: 68548,
			source_url: "http://robstantoncook.tumblr.com/post/17398864460/bucket-my-british-blue-ready-for-anything-ps",
			source_title: "robstantoncook",
			caption: "",
			image_permalink: "http://mydailygraphics.tumblr.com/image/19952013306",
			photos: [
			{
				caption: "",
				alt_sizes: [
				{
					width: 800,
					height: 1200,
					url: "http://40.media.tumblr.com/tumblr_lz7fkvargG1roo7opo1_1280.jpg"
				},
				{
					width: 500,
					height: 750,
					url: "http://41.media.tumblr.com/tumblr_lz7fkvargG1roo7opo1_500.jpg"
				},
				{
					width: 400,
					height: 600,
					url: "http://40.media.tumblr.com/tumblr_lz7fkvargG1roo7opo1_400.jpg"
				},
				{
					width: 250,
					height: 375,
					url: "http://41.media.tumblr.com/tumblr_lz7fkvargG1roo7opo1_250.jpg"
				},
				{
					width: 100,
					height: 150,
					url: "http://41.media.tumblr.com/tumblr_lz7fkvargG1roo7opo1_100.jpg"
				},
				{
					width: 75,
					height: 75,
					url: "http://40.media.tumblr.com/tumblr_lz7fkvargG1roo7opo1_75sq.jpg"
				}
				],
				original_size: {
					width: 800,
					height: 1200,
					url: "http://40.media.tumblr.com/tumblr_lz7fkvargG1roo7opo1_1280.jpg"
				},
				exif: {
					Camera: "Canon EOS 5D Mark II",
					ISO: 2500,
					Exposure: "1/80th",
					FocalLength: "105mm"
				}
			}
			]
		},
		{
			blog_name: "mydailygraphics",
			id: 18431084535,
			post_url: "http://mydailygraphics.tumblr.com/post/18431084535",
			slug: "",
			type: "photo",
			date: "2012-02-28 08:52:29 GMT",
			timestamp: 1330419149,
			state: "published",
			format: "html",
			reblog_key: "3sSgHiIz",
			tags: [ ],
			short_url: "http://tmblr.co/Z-x6OyHAb0Vt",
			highlighted: [ ],
			note_count: 6799,
			source_url: "http://overdoz.tumblr.com",
			source_title: "overdoz",
			caption: "",
			link_url: "http://overdoz.tumblr.com",
			image_permalink: "http://mydailygraphics.tumblr.com/image/18431084535",
			photos: [
			{
				caption: "",
				alt_sizes: [
				{
					width: 500,
					height: 750,
					url: "http://41.media.tumblr.com/tumblr_m02w9rQoKl1qc3pf5o1_500.jpg"
				},
				{
					width: 400,
					height: 600,
					url: "http://40.media.tumblr.com/tumblr_m02w9rQoKl1qc3pf5o1_400.jpg"
				},
				{
					width: 250,
					height: 375,
					url: "http://40.media.tumblr.com/tumblr_m02w9rQoKl1qc3pf5o1_250.jpg"
				},
				{
					width: 100,
					height: 150,
					url: "http://41.media.tumblr.com/tumblr_m02w9rQoKl1qc3pf5o1_100.jpg"
				},
				{
					width: 75,
					height: 75,
					url: "http://41.media.tumblr.com/tumblr_m02w9rQoKl1qc3pf5o1_75sq.jpg"
				}
				],
				original_size: {
					width: 500,
					height: 750,
					url: "http://41.media.tumblr.com/tumblr_m02w9rQoKl1qc3pf5o1_500.jpg"
				}
			}
			]
		}
		];*/
})();

/*(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    
  });

  var gems = [
    { name: 'Azurite', price: 2.95 },
    { name: 'Bloodstone', price: 5.95 },
    { name: 'Zircon', price: 3.95 },
  ];
})();*/


