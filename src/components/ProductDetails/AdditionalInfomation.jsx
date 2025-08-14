import React from "react";

const AdditionalInformation = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row items-start gap-8">
      {/* Left side - Info table */}
      <div className="flex-1 max-w-md">
        <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
        <table className="w-full  text-sm">
          <tbody>
            <tr>
              <td className=" px-4 py-2 font-medium">Weight</td>
              <td className=" px-4 py-2">1 kg</td>
            </tr>
            <tr>
              <td className=" px-4 py-2 font-medium">Dimensions</td>
              <td className=" px-4 py-2">10 × 15 × 20 cm</td>
            </tr>
            <tr>
              <td className=" px-4 py-2 font-medium">Origin</td>
              <td className=" px-4 py-2">China</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Right side - Image/Video */}
      <div className="flex-1 max-w-md">
        {/* Example image */}
        <img
          src="/images/pdetails/deliveryman.png"
          alt="Video placeholder"
          className="rounded-lg shadow-md w-full object-cover"
        />
        {/* Or if you want to embed video, you can use iframe or video tag */}
      </div>
    </div>
  );
};

export default AdditionalInformation;
