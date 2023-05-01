import React, { useState } from 'react';

import Head from 'next/head'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image';

const font = Open_Sans({ subsets: ['latin'] })

import categories from '../data/categories.json'
import projects from '../data/projects.json'

export default function Home() {

  const [category, setCategory] = useState(categories[0].id)

  /** Years old */
  const today = new Date();
  const birthday = new Date('1998-02-12');
  const diference = today.getTime() - birthday.getTime();
  const yearsOld = Math.floor(diference / (1000 * 60 * 60 * 24 * 365.25));



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
              <div className="text-secondary fw-600 mb-2">Hi, my name is</div>
              <div className="text-light fw-600 display-4">Gustavo Coimbra</div>
              <div className="text-info fw-600 display-4 mb-2">Full-stack developer</div>
              <div className="text-info">I&apos;ve been studying programming since I was 11 years old. Now I&apos;m {yearsOld}.</div>
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

          <hr className="my-4" />

          <div className="row">
            <div className="col categories">

              {categories.map((categoryRow, index) => (
                <div key={index}>
                  <input checked={(category === categoryRow.id)} onChange={() => setCategory(categoryRow.id)} name="category" className="d-none" type="radio" value={categoryRow.id} id={`category-` + categoryRow.id} />
                  <label htmlFor={`category-` + categoryRow.id} className={`fw-600 mb-2 category`}>{categoryRow.title}</label>
                </div>
              ))}

            </div>
          </div>

          <div className="row mt-2" id="projects">

            {projects.map((project, index) => (

              <div key={index} className={`col-12 col-sm-5 col-md-4 col-lg-3 p-2 ` + (category == project.category ? `` : `d-none`)}>

                <div className="modal modal-sm fade" id={`project-` + index}>
                  <div className="modal-dialog">


                    <div className="modal-content">
                      <div className="modal-header text-center">
                        <h6 className="modal-title" id="exampleModalLabel">What do you wanna see?</h6>
                      </div>

                      <div className="modal-body">

                        {projects[index].links.map((button, index) => (<>

                          <a key={index} target="_blank" href={button.url} className="btn btn-light w-100 my-1">{button.title}</a>

                        </>))}


                      </div>
                    </div>
                  </div>
                </div>

                <a className="btn btn-dark text-start p-3 w-100 h-100" href="#" data-bs-toggle="modal" data-bs-target={`#project-` + index}>
                  <div className="text-light fw-600 mb-1">{project.title}</div>
                  <div className="text-light fw-300 mb-2">{project.description}</div>
                  <div className="labels text-secondary fw-600">{projects[index].labels.join(' • ')}</div>
                </a>

              </div>

            ))}

          </div>


        </div>

      </main>

    </>
  )
}
