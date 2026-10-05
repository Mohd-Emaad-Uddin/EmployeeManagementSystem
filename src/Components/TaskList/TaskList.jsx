import Accept from "./Accept";
import CompleteTask from "./CompleteTask";
import FailedTask from "./Failed";
import NewTask from "./NewTask";

const TaskList = ({data}) => {
    
    
    return ( 
        <div id="tasklist" className="h-[55%] flex overflow-x-auto items-center justify-start gap-5 flex-nowrap py-5 mt-10 w-full">
            {data.tasks.map((ele, idx)=> {
                
                if(ele.active) {
                    return <Accept key={idx} data = {ele}/>
                }
                if(ele.completed) {
                    return <CompleteTask key={idx} data = {ele}/>
                }
                if(ele.failed) {
                    return <FailedTask key={idx} data = {ele}/>
                }
                if(ele.NewTask) {
                    return <NewTask key={idx} data = {ele}/>
                }
            })}      
        </div>
    );
}
 
export default TaskList;