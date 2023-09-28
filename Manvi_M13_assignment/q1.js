const todos = document.getElementById("todo")
const addtasks = document.querySelector("#AddTask")
const adddprioritytasks = document.querySelector("#AddPriorityTask")
const removetasks = document.querySelector("#RemoveTask")
const m_div = document.getElementById("m_div");


        addtasks.addEventListener("click" , ()=> {
            const unorderedlists = document.getElementById("lists");  
            const taskss = document.createElement("div");
            const listitems = document.createElement("li");
            const x = todos.value;
            console.log(x)
            listitems.innerText = x;
            taskss.append(listitems);
            const cmpbtn = document.createElement("button")
            cmpbtn.innerText="completed";
            cmpbtn.setAttribute("id","cmpbtn")
            cmpbtn.setAttribute("onclick","completedthisitem(this)")
            taskss.append(cmpbtn) 

            const delbtn = document.createElement("button")
            delbtn.innerText="delete task";
            delbtn.setAttribute("id","delbtn")
            delbtn.setAttribute("onclick","deletethisitem(this)")
            taskss.append(delbtn) 

            unorderedlists.append(taskss);

            

        })

        adddprioritytasks.addEventListener("click", ()=>{

            const unorderedlists = document.getElementById("lists");  
            const taskss = document.createElement("div");
            const listitems = document.createElement("li");
            const x = todos.value;
            console.log(x)
            listitems.innerText = x;
            taskss.append(listitems);
            const cmpbtn = document.createElement("button")
            cmpbtn.innerText="completed";
            cmpbtn.setAttribute("id","cmpbtn")
            cmpbtn.setAttribute("onclick","completedthisitem(this)")
            taskss.append(cmpbtn) 

            const delbtn = document.createElement("button")
            delbtn.innerText="delete task";
            delbtn.setAttribute("id","delbtn")
            delbtn.setAttribute("onclick","deletethisitem(this)")
            taskss.append(delbtn) 

            unorderedlists.prepend(taskss);

        })

        removetasks.addEventListener("click" , ()=>{
            const removelists = document.getElementById("lists");
            removelists.remove()

            const list_c = document.createElement("ui");
            list_c.setAttribute("id", "lists");
            m_div.append(list_c);

        })

        function deletethisitem(e){
            e.parentElement.parentElement.removeChild(e.parentElement);
        }

        function completedthisitem(a){
            a.parentElement.classList.toggle("changeopacity");
        }



        


