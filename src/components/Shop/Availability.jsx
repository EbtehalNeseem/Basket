import AvailabilityItem from "@/components/Shop/AvailabilityItem.jsx";
export default function Availability() {
  return (
    <div className="flex flex-col gap-5 ">
      <h6 className="font-semibold">AVAILABILITY</h6>
      <div className="flex flex-col gap-3">
        <AvailabilityItem name="In Stock" id="InStock" />
        <AvailabilityItem name="Out of Stock" id="outofstock" />
      </div>
    </div>
  );
}
