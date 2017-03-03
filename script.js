// New Script //

// Main Angular Application
var App = angular.module("myApp", []);

// Master Angular Controller
App.controller('masterCtrl', function($scope) {

	$(document).ready(function(){
		$('a').addClass('transition');

		$('.bta').click(function(){
        $('html, body').animate({
            scrollTop: 0 // $("#sdl").offset().top
        }, 1000);
    });
	});

	$scope.skills = [
		'HTML5', 'CSS3',	'JavaScript 6',
		'jQuery', 'Knockout',	'Backbone',
		'Angular', 'Jasmine',	'API',
		'AJAX', 'Bootstrap',	'Web Optimization',
		'JS Testing', 'Unit Testing',	'XML',
		'SQL', 'JSON',	'Python',
		'Flask', 'Django',	'Client-Side',
		'Server-Side', 'Programming',	'OOP',
		'MySQL', 'Web Server',	'Database',
		'Object-Oriented', 'Full Stack',	'Front End',
		'MVC', 'Frameworks',	'PostgreSQL',
		'Responsive Layout', 'Linux',	'Apache',
		'LAMP Stack', 'MEAN Stack',	'CMS',
		'Version Control', 'Shell',	'Terminal',
		'Scripting', 'Command Line Interface (CLI)',
		'508 Compliance', 'JIRA Ticket System', 'Microsoft Office',
		'Networking & Security'
	]

	$scope.workItems = [
		{
			name: 'Department of Labor - Occupational Safety & Health Administration (OSHA)',
			title: 'Sr. Web Content Developer',
			dates: 'Feb 2016 - Present',
			location: 'Washington D.C',
			icon: 'img/dol-1.png',
			tasks: [
				'Working under 22nd Century Technologies (TSCTI) as a Web Content Developer for U.S Department of Labor, Occupational Safety and Health Administration (OSHA)',
				'Part of a team of developers that manages government webpages to provide 508 compliant and user friendly experiences. Using HTML, CSS, JavaScript, BootStrap, jQuery',
				'Use JIRA ticketing system to monitor changes of public website and work requests',
				'Update public websites based on work requests to reflect the latest information',
				'Create, Edit, and/or Delete HTML and other files then publish changes to public website(s)',
				'Developed scripts to automate operations and optimize web performance (jQuery)',
			]
		},
		{
			name: 'National Aeronautics & Space Administration (NASA) - Headquarters',
			title: 'Data Analyst & Network Operations',
			dates: 'Aug 2015 - Jan 2016',
			location: 'Washington D.C',
			icon: 'img/nasa-2.jpg',
			tasks: [
				'Working with IT Operations branch to maintain and improve network infrastructure through the use of MS Visio and working with network devices to maintain accuracy of information',
				'Update over 100 assets on a scheduled basis to update inventory in asset management system to reduce amount of incorrect information',
				'Diagram network infrastructure to manage and present hundreds of servers weekly to maintain accurate data center information',
				'Consolidate and maintain accurate information of assets from multiple sources into a central location to create ease of access',
				'Analyze information from many asset management systems, identifying discrepancies and developing reports to maintain correct information',
				'Update information on assets through the use of asset management system to reflect the current status of equipment',
			]
		},
	]

	$scope.projects = [
		{
			title: 'Object Oriented Programming',
			image: 'img/javascript-logo.png',
			description: 'These arcade games, built with vanilla(pure) javascript, demonstrates object oriented programming, object instances, scopes, prototypes, and using the keyword this.',
			linkName: 'Invaders',
			linkHref: 'http://ryanwaite28.github.io/invaders/',
		},
		{
			title: 'App Engine, Datastore & Cloud Endpoints',
			image: 'img/appeng.png',
			description: 'These two projects are built and deployed using Google app engine, as well as implementing datastore and endpoints! With the backend of Google, these are able to scale to a large volume!',
			linkName: 'Who Am I? (Game)',
			linkHref: 'https://github.com/ryanwaite28/whoami-game',
		},
		{
			title: 'Linux Server Configuration',
			image: 'img/ubuntu-logo.png',
			description: 'This project takes a basic installation of Ubuntu server and configures it to serve a web application! Using Apache server, PostgreSQL and Python, this Linux machine is ready for production!',
			linkName: 'Ubuntu - GitHub',
			linkHref: 'https://github.com/ryanwaite28/fsnd-p5',
		},
		{
			title: 'Bootstrap - Responsive Design',
			image: 'img/bootstrap-logo.jpg',
			description: 'This project was created using modern designs and the bootstrap css framework/library. With the mobile-first approach, this site looks great on any device!',
			linkName: 'New Expressions',
			linkHref: 'https://github.com/ryanwaite28/new-expressions',
		},
		{
			title: 'JavaScript - MVC Paradigm',
			image: 'img/angular-1.png',
			description: 'This project was built with AngularJS, a high-level JS MVC framework! Each app was design with scalability and efficiency in mind, as well as being maintainable! Clean code is always a must!',
			linkName: 'Search Master',
			linkHref: 'https://github.com/ryanwaite28/fs-api',
		},
		{
			title: 'Jasmine - JS Unit Testing',
			image: 'img/jasmine-logo.png',
			description: 'This project is built with Google Feeds and monitored by Jasmine JS, ensuring that the app will meet functioning baselines throughout the development life-cycle!',
			linkName: 'UdaciFeeds',
			linkHref: 'https://github.com/ryanwaite28/jasmine-testing',
		},
	]

	$scope.education = [
		{
			name: 'Montgomery College',
			type: 'Community College',
			major: 'Computer Science',
			location: 'Rockville, MD',
			dates: 'Jan 2017 - Present',
			icon: 'img/mc-1.jpg',
		},
		{
			name: 'Udacity',
			type: 'Online School/Training',
			major: 'Computer Science',
			location: 'N/A',
			dates: 'May 2015 - Sep 2016',
			icon: 'img/udacity-2.png',
		},
		{
			name: 'Year Up NCR / Northern Virginia Community College (NOVA)',
			type: 'Technical Training',
			major: 'Computer Science',
			location: 'Arlington, VA',
			dates: 'Mar 2015 - Jan 2016',
			icon: 'img/yupro-1.jpg',
		},
		{
			name: 'John F. Kennedy',
			type: 'High School',
			major: 'Information Technology',
			location: 'Silver Spring, MD',
			dates: 'Aug 2010 - Jun 2014',
			icon: 'img/kennedy-1.jpg',
		},
	]

	$scope.credentials = [
		{
			name: 'Udacity - Full Stack NanoDegree',
			icon: 'img/nd-grad-cert-fs.png',
			earned: 'Dec 2015',
			expires: 'Never',
		},
		{
			name: 'Udacity - Front End NanoDegree',
			icon: 'img/nd-grad-cert-fe.png',
			earned: 'Sep 2016',
			expires: 'Never',
		},
		{
			name: 'Department of Labor - Public Trust Clearance',
			icon: 'img/dol-2.jpg',
			earned: 'Nov 2016',
			expires: 'Oct 2021',
		}
	]

	$scope.references = [
		{
			name: 'Larry Rubin',
			icon: 'img/laurence_rubin.png',
			linkedin: 'https://www.linkedin.com/in/larry-rubin-cpa-82b20a6',
			email: 'lrubin@aronsonllc.com'
		},
		{
			name: 'Aaron Brachman',
			icon: 'img/aaron_brachman.jpg',
			linkedin: 'https://www.linkedin.com/in/aaron-brachman-cfp%C2%AE-aams-a82b3a3/',
			email: 'aaron.brachman@stewardpartners.com'
		},
		{
			name: 'Kristi Dearing',
			icon: 'img/kristi_dearing.jpg',
			linkedin: 'https://www.linkedin.com/in/kristi-dearing-46a62727',
			email: 'ksddearing@gmail.com'
		},
		{
			name: 'Jason Gromley',
			icon: 'img/jason_gromley.jpg',
			linkedin: 'https://www.linkedin.com/in/jason-gromley-a3358031',
			email: 'jason.gromley@shcare.net'
		},
		{
			name: 'Britany Miller',
			icon: 'img/britany_miller.jpg',
			linkedin: 'https://www.linkedin.com/in/britanymiller',
			email: 'b.miller5@yahoo.com'
		},
		{
			name: 'Gina Allen',
			icon: 'img/gina_allen.jpg',
			linkedin: 'https://www.linkedin.com/in/allengm',
			email: 'gallen@YearUp.org'
		},
		{
			name: 'Allison Alt',
			icon: 'img/allison_alt.jpg',
			linkedin: 'https://www.linkedin.com/in/allisonalt',
			email: 'allisonclairealt@gmail.com'
		}
	]

});
