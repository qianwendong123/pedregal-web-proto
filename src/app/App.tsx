import StorePage from "@/imports/StorePage";

export default function App() {
  return (
    <div className="size-full overflow-hidden">
      <div className="size-full flex flex-col">
        {/* Container for the store page with responsive layout */}
        <div className="flex-1 overflow-hidden">
          <StorePage />
        </div>
      </div>
    </div>
  );
}
