import PortfolioSlider from "./PortfolioSlider";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

function TabsWrapper() {
  const tabsItems = [
    { label: "All Work", value: "All" },
    { label: "Website Technology", value: "Website" },
    { label: "Analysis & Analytics", value: "Analysis" },
    { label: "Marketing Strategy", value: "Marketing" },
  ];
  return (
    <Tabs
      defaultValue={tabsItems[0].value}
      className='w-full mt-5 py-5 flex flex-col'>
      <TabsList className='flex h-auto gap-1 md:gap-5 w-full'>
        {tabsItems.map((item, index) => (
          <TabsTrigger
            className={`border-black border-[1px] data-[state=active]:bg-[#4F16F2] data-[state=active]:text-white text-black rounded-none max-md:px-1 md:mb-5 px-4 grow max-w-[calc(100% / ${tabsItems.length})]`}
            key={index}
            value={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsItems.map((item, index) => (
        <TabsContent key={index} value={item.value}>
          <PortfolioSlider />
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default TabsWrapper;
