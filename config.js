var config = {
	app: {
		name: "lms",
		url: "https://lms-bk-7k5qcren2q-el.a.run.app",
		frontendUrl: "https://s3.ap-south-1.amazonaws.com/lms.easyaspataal.com/index.html",
		secret: "e99e28a3dfcb8d1eec09db84aa3b3a78",
		language: "english",
		publicDir: "assets",
	},
	meta: {
		author:"",
		description: "__metadescription",
		charset: "UTF-8",
	},
	auth: {
		jwtDuration: 30, //in minutes
		otpDuration: 5, //in minutes
	},
	database: {
		name:"LMS",
        type: "postgres",
        host: "easyaspataal-staging.cluster-cbqgtf1hzzqq.ap-south-1.rds.amazonaws.com",
        username: "easy_admin",
        password: "EasyAspatal1212",
        port: "5432",
        charset: "utf8",
        recordlimit: 10,
        ordertype: "DESC"
	},
	mail: {
		username:"",
		password: "",
		senderemail:"",
		sendername:"",
		host: "",
		port: ""
	},
	upload: {
		tempDir: "uploads/temp/",
		import_data: {
			filenameType: "timestamp",
			extensions: "json,csv",
			limit: "10",
			maxFileSize: "3",
			returnFullpath: "false",
			filenamePrefix: "",
			uploadDir: "uploads/files/"
		},
		
		photo: {
			filenameType: "random",
			extensions: "jpg,png,gif,jpeg",
			limit: "1",
			maxFileSize: "3",
			returnFullpath: false,
			filenamePrefix: "",
			uploadDir: "uploads/files",
			imageResize:  [ 
				{name: "small", width: 100, height: 100, mode: "cover"}, 
				{name: "medium", width: 480, height: 480, mode: "inside"}, 
				{name: "large", width: 1024, height: 760, mode: "inside"}
			],

		},

	},
	s3: {
		secretAccessKey: "",
		accessKeyId: "",
		region: "",
		bucket: "",
	},
	
}
module.exports = config