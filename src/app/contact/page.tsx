import Form from "next/form";

export default function Contact() {
  return (
    <div className="h-screen w-full backdrop-blur-sm flex flex-row justify-center">
      <Form action="/search">
        {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
        <input name="query" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
