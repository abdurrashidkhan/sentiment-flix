import "./style.css";
export default function ExclusiveContent() {
  return (
    <section id="exclusiveContent">
      <div className="container mx-auto px-2 py-0 sm:py-24">
        <div className="grid grid-cols-1  items-center justify-center justify-items-start gap-5">
          {/* fast content */}
          <div className="py-20">
            <h1 className="text-3xl sm:text-4xl font-medium ">
              Exclusive Content
            </h1>
            <p className="pt-3 pb-1">Based on best selling romance novels.</p>
            <div className=" ">
              <p>
                <strong>Wait With Me</strong> Based on the book by Amy Daws.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
