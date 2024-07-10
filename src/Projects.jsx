import useFetchProjects from './fetchProjects';

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  console.log(projects);
  if (loading) {
    return (
      <section className='projects'>
        <div className='projects-center'>
          <div className='loading'></div>
        </div>
      </section>
    );
  }

  return (
    <section className='projects'>
      <div className='projects-center'>
        {projects.map((project) => {
          const { title, url, id, img, source_url } = project;
          console.log(source_url);
          return (
            <a
              key={id}
              href={url ? url : source_url}
              target='_blank'
              rel='noreferrer'
              className='project'
            >
              <img src={img} alt={title} className='img' />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
