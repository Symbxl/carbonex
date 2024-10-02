interface Props {
  title: string,
  subtitle: string,
  description: string,
  link: string
}
const Section = ({ title, subtitle, description, link }: Props) => {
  return (<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <h2 className="text-4xl font-extrabold dark:text-black">{title}</h2>
    <p className="my-4 text-lg text-gray-500">{subtitle}</p>
    <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">{description}</p>
    <a href={link} className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
      Read more
      <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </a>
  </div>
  );
}

export default Section;