import Head from 'next/head'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image';

const font = Open_Sans({ subsets: ['latin'] })


export default function Home() {

  /** Years old */
  const today = new Date();
  const birthday = new Date('1998-02-12');
  const diference = today.getTime() - birthday.getTime();
  const yearsOld = Math.floor(diference / (1000 * 60 * 60 * 24 * 365.25));

  /** My projects */
  const arrayProjects = [

    {
      title: 'Calculator',
      description: 'Modern and clean calculator made using pure react native',
      labels: [
        'Front-end',
        'React Native',
        'Nerdamer'
      ],
      links: [
        {
          title: 'Github repository',
          url: 'https://github.com/gustavocoimbradev/calculator'
        }
      ]
    },

    {
      title: 'Authentication',
      description: 'Signup and signin mobile app made using React Native and MongoDB',
      labels: [
        'Front-end',
        'Back-end',
        'React Native',
        'MongoDB'
      ],
      links: [
        {
          title: 'Github repository',
          url: 'https://github.com/gustavocoimbradev/authentication'
        }
      ]
    },

    
    {
      title: 'Auto address',
      description: 'Autocomplete address based on entered zip code (Brazil)',
      labels: [
        'PHP',
        'Javascript',
        'jQuery',
        'ViaCep API'
      ],
      links: [
        {
          title: 'Github repository',
          url: 'https://github.com/gustavocoimbradev/auto-address'
        },

        {
          title: 'Live demo',
          url: 'https://insider.blue/github/auto-address/'
        }
      ]
    },

    {
      title: 'Infinite scroll',
      description: 'Example of infinite scroll using React Native and the Github API',
      labels: [
        'Front-end',
        'React Native'
      ],
      links: [
        {
          title: 'Github repository',
          url: 'https://github.com/gustavocoimbradev/infinite-scroll/'
        }
      ]
    },

    {
      title: 'Sinopses Game',
      description: 'Mini movie/series guessing game based on sarcastic plots',
      labels: [
        'Front-end',
        'React Native'
      ],
      links: [
        {
          title: 'Github repository',
          url: 'https://github.com/gustavocoimbradev/sinopses'
        }
      ]
    },

    {
      title: 'Crud PHP (MVC)',
      description: 'CRUD with PHP using MVC architecture',
      labels: [
        'Back-end',
        'PHP',
        'API Rest'
      ],
      links: [
        {
          title: 'Github repository',
          url: 'https://github.com/gustavocoimbradev/crud-php'
        }
      ]
    },

    {
      title: 'My portfolio',
      description: 'Page with my projects and a little about me',
      labels: [
        'Front-end',
        'ReactJS',
        'React Native'
      ],
      links: [
        {
          title: 'Github repository',
          url: 'https://github.com/gustavocoimbradev/portfolio'
        }
      ]
    },

  ]

  return (
    <>

      <Head>
        <title>Gustavo Coimbra</title>
        <meta name="description" content="My portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={font.className}>

        <div className="container my-3">

          <div className="row">
            <div className="col">
              <div className="text-secondary fw-600 mb-2">Hello, my name is</div>
              <div className="text-light fw-600 display-4">Gustavo Coimbra</div>
              <div className="text-info fw-600 display-4 mb-2">Full-stack developer</div>
              <div className="text-info">I've been studying programming since I was 11 years old. Now I'm {yearsOld} years old.</div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col social-buttons">
              <a target="_blank" href="https://github.com/gustavocoimbradev" className="btn btn-light fw-bold">
                <Image alt="Github" className="btn-icon me-1" src='/github-icon.svg' width={17} height={17} />
                Github
              </a>
              <a target="_blank" href="https://linkedin.com/in/gustavocoimbradev" className="btn btn-secondary fw-bold">
                <Image alt="Linkedin" className="btn-icon me-1" src='/linkedin-icon.svg' width={17} height={17} />
                Linkedin
              </a>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <div className="text-light fw-600 mb-2">My projects</div>
            </div>
          </div>

          <div className="row mt-2" id="projects">

            {arrayProjects.map((project, index) => (

              <div className="col-12 col-sm-5 col-md-4 col-lg-3 p-2">

                <div className="modal modal-sm fade" id={`project-` + index}>
                  <div className="modal-dialog">


                    <div className="modal-content">


                      <div className="modal-header text-center">
                        <h6 className="modal-title" id="exampleModalLabel">What do you wanna see?</h6>
                      </div>

                      <div className="modal-body">

                        {arrayProjects[index].links.map((button, index) => (<>

                          <a target="_blank" href={button.url} className="btn btn-light w-100 my-1">{button.title}</a>

                        </>))}


                      </div>
                    </div>
                  </div>
                </div>

                <a className="btn btn-dark text-start p-3 w-100 h-100" href="#" data-bs-toggle="modal" data-bs-target={`#project-` + index}>
                  <div className="text-light fw-600 mb-1">{project.title}</div>
                  <div className="text-light fw-300 mb-2">{project.description}</div>
                  <div className="labels text-secondary fw-600">{arrayProjects[index].labels.join(' • ')}</div>
                </a>

              </div>

            ))}

          </div>


        </div>

      </main>

    </>
  )
}
