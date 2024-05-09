import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TextHolder from "./components/custom/TextHolder";

const App = () => {
    return (
        <div className="w-full h-screen flex relative items-center justify-center">
            <Card className="w-[1200px] h-auto absolute p-2">
                <h2 className="text-center text-3xl">
                    Workout tracker
                </h2>
                <div className="grid grid-cols-2 mx-2">
                    <div className="text-center">
                        <Button className=" p-6">
                            Main menu
                        </Button>
                    </div>
                    <div className="text-center">
                        <Button className=" p-6">
                            View results
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-10 gap-2 mt-2">
                    <div className="col-span-7  grid grid-cols-4 gap-1">
                        <TextHolder subtext={
                            <div className="bg-green-400 rounded-md p-1 max-w-[150px]">
                                Down 1.00
                            </div>
                        }>
                            UP and Down:
                        </TextHolder>
                        <TextHolder subtext={
                            <div className="bg-purple-400 rounded-md px-2 max-w-[150px]">
                                0
                            </div>
                        }>
                            REPS:
                        </TextHolder>
                        <TextHolder subtext={
                            <div className="bg-red-400 rounded-md p-1 max-w-[150px]">
                                Neutral 0.8
                            </div>
                        }>
                            HIPS:
                        </TextHolder>
                        <TextHolder subtext={
                            <div className="bg-yellow-400 rounded-md p-1 max-w-[150px]">
                                Neutral 0.41
                            </div>
                        }>
                            LEAN:
                        </TextHolder>
                    </div>
                    <div className="col-span-3 text-center">
                        <h2 className="text-2xl">
                            Suggestions:
                        </h2>
                        <div className="text-2xl">
                            No suggestions
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="bg-[#333333] w-[1080px] h-[720px] my-2 rounded-lg justify-center items-center flex relative">
                        <div className="absolute top-2 right-2 bg-slate-500 rounded-lg p-4  cursor-pointer">
                            <img src="/fullscreen.png" alt="fullscreen" className="w-10 aspect-square" />
                        </div>
                        <div className="absolute top-2 left-2 bg-red-400 rounded-lg p-4 cursor-pointer">
                            <img src="/reset.png" alt="reset" className="w-10 aspect-square" />
                        </div>
                        <img src="http://192.168.0.108:5000/video_feed" width="1253" height="705" />
                        {/* <div className="text-5xl text-white">
                            Waiting for stream to start....
                        </div> */}
                    </div>
                </div>

            </Card>
        </div>
    );
}

export default App;