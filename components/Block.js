export default function Block({ text, type }) {
  if (type == "warning") {
    return (
      <div class="mt-4 bg-yellow-200 w-full py-2 my-2 h-fit p-4 rounded-md">
        {text}
      </div>
    );
  } else if (type == "info") {
    return <div class="mt-4 bg-blue-200 w-full py-2 my-2 h-fit  p-4 rounded-md">{text}</div>;
  } else if (type == "danger") {
    return <div class="mt-4 bg-red-200 w-full py-2 my-2 h-fit  p-4 rounded-md">{text}</div>;
  } else {
    return <div class="mt-4 bg-green-200 w-full py-2 my-2 h-fit  p-4 rounded-md">{text}</div>;
  }
}
