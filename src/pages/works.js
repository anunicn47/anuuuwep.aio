import * as React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";

export const query = graphql`
  query graphAllWorks {
    allDataJson {
      nodes {
        project_name
        project_language_image
        project_language
        project_image
        project_description
        project_action {
          case_study {
            available
            content
          }
          demo {
            available
            content
          }
          youtube {
            available
            content
          }
          github {
            available
            content
          }
          website {
            available
            content
          }
        }
      }
    }
  }
`;

export default function Works({ data }) {
  return (
    <>
      <title>Works | Tuhin</title>
      <Layout />
      <div>
        <div className="projects_header">
          <h1>My Works</h1>
          <p>
            Some of my works which I love are listed here, other Open Sourced
            projects can be found on my <br />
            <a className="gh" href="https://github.com/tuhinpal">
              Github
            </a>
          </p>
        </div>
        {data.allDataJson.nodes.map((data) => (
          <div className="project" key={data.project_name}>
            <div className="content">
              <h1>
                {data.project_name}{" "}
                <img
                  src={data.project_language_image}
                  className="usedlang"
                  alt="Javascript"
                />
              </h1>
              <p>{data.project_description}</p>
              <div className="action">
                {data.project_action.website.available ? (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={data.project_action.website.content}
                    className="btn"
                  >
                    <i className="fa fa-globe fa-lg"></i>
                  </a>
                ) : (
                  ""
                )}
                {data.project_action.github.available ? (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={data.project_action.github.content}
                    className="btn"
                  >
                    <i className="fa fa-github-alt fa-lg"></i>
                  </a>
                ) : (
                  ""
                )}
                {data.project_action.case_study.available ? (
                  <Link
                    to={data.project_action.case_study.content}
                    className="btn"
                  >
                    Case Study
                  </Link>
                ) : (
                  ""
                )}
                {data.project_action.demo.available ? (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={data.project_action.demo.content}
                    className="btn"
                  >
                    Demo
                  </a>
                ) : (
                  ""
                )}
                {data.project_action.youtube.available ? (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={data.project_action.youtube.content}
                    className="btn"
                  >
                    <i className="fa fa-youtube-play fa-lg"></i>
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>

            {data.project_image && (
              <div className="image">
                <img src={data.project_image} alt={data.project_name} />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
