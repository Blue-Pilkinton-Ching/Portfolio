import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const { name } = useParams();

  if (!name) {
    throw new Error('Missing param "name"');
  }

  return (
    <>
      <p className="">
        It&apos;s impossible to have a frog named {name}, the laws forbid it
      </p>
    </>
  );
}
