"use client";

function Error({error, reset}) {
    console.log(error);
  return (
    <div className="min-h-screen flex items-center justify-center">
      OOOPs error occured......
      <p>
        <button className="bg-red-500 py-5" onClick={reset}>Reset</button>
      </p>
    </div>
  )
}

export default Error;
