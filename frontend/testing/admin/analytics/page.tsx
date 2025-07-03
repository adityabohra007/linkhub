import Sidebar from "./../../../components/Sidebar";
const Page = () => {
  return (
    <>
      <div className="grid h-screen" style={{ gridTemplateColumns: "auto 1fr" }}>
        <Sidebar />
        <div>
          <div className="flex sticky px-5 py-3">
            <span>Analytics</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
