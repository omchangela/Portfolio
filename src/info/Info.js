import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import om from "../img/om.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "om",
    lastName: "Changela",
    Image: om,
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            link: '#',
            text: 'fueled by Tea'
        },
        {
            emoji: '🌎',
            link: '#',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            link: '#',
            text: "Software Engineer at Has Audio Solution"
        },
        {
            emoji: "📧",
            link: 'mailto:changelaom@gmail.com',
            text: "changelaom@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/om.changela.7",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/om_changela_",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/omchangela",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/om-changela1545",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/changela_o78191",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello! I'm om. I'm a software engineer for HAS AUDIO SOLUTION. I studied B.Tech(Information Technology) at Atmiya University, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills: {
        proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'Java'],
        exposedTo: ['nodejs', 'python', 'nextjs']
    },
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'coding',
            emoji: '👨‍💻'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'chess',
            emoji: ' ♔ '
        }
    ],
    portfolio: [
        {
            title: "MoviePedia",
            live: "https://moviepedia.paytonpierce.dev/",
            image: mock5
        },
        {
            title: "React Portfolio Template",
            live: "https://paytonpierce.dev",
            image: mock1
        }
    ]
};
