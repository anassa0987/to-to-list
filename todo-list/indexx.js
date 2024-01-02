const wrapper = document.querySelector(".wrapper");
	const menuBtn = document.querySelector(".menu-btn");
	const backBtn = document.querySelector(".back");






	menuBtn.addEventListener("click", toggleScreen);
	backBtn.addEventListener("click", toggleScreen);


	function toggleScreen(){
		wrapper.classList.toggle("show-category")
	}


	const addTaskBtn = document.querySelector(".add-task-btn");
	const addTaskForm = document.querySelector(".add-task");
	const blackBackDrop = document.querySelector(".black-backdrop");


	const toggleAddTaskForm = () =>{
		addTaskForm.classList.toggle("active");
		blackBackDrop.classList.toggle("active");
		addTaskBtn.classList.toggle("active");


	}

	addTaskBtn.addEventListener("click", toggleAddTaskForm);
	blackBackDrop.addEventListener("click", toggleAddTaskForm);





	let categories = [
		{
			title:"Personal",
			img:"https://static.vecteezy.com/system/resources/previews/016/766/342/original/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-transparent-background-png.png",
		},

		{
			title:"books",
			img:"https://static.vecteezy.com/system/resources/previews/026/976/772/original/3d-icon-avatar-cute-girl-going-to-school-pupil-with-backpack-student-walking-and-carry-studentbooks-cartoon-scene-of-first-day-or-schooling-on-isolated-on-transparent-background-generative-ai-png.png",
		},

		{
			title:"Shopping",
			img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1YegOe_DLQWuO6wBUBwln92xU5g9vJ2fAg&usqp=CAU",
		},

		{
			title:"Coding",
			img:"https://cdn3d.iconscout.com/3d/premium/thumb/programmer-9440401-7675299.png?f=webp",
		},


		{
			title:"Health",
			img:"https://static.vecteezy.com/system/resources/thumbnails/011/019/337/small_2x/medical-surgeon-specialist-doctor-avatar-3d-icon-png.png",
		},

		{
			title:"Fitness",
			img:"https://static.vecteezy.com/system/resources/previews/024/999/800/non_2x/3d-sportsman-character-performing-dumbbell-lateral-raise-free-png.png",
		},


		{
			title:"Education",
			img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDJ94N3IKjNXv7WNvsIaIqtWuRuDCJRXFCw&usqp=CAU",
		},

		{
			title:"Finance",
			img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16DzofYv1-V59B-cVElTJvKqW56_N1-B6Hw&usqp=CAU",
		},

	];

	let tasks = [
		{
			id:1,
			task:"Go to market",
			category: "Shopping",
			completed:false,
		},

		{
			id:2,
			task:"Read a chapter of a book",
			category: "Personal",
			completed:false,
		},

		{
			id:3,
			task:"write",
			category:"Books",
			completed:false,
		},

		{
			id:4,
			task:"Write a code in Python",
			category:"Coding",
			completed:false,
		},

		{
			id:5,
			task:"Go to Hospital",
			category:"Health",
			completed:false,
		},

		{
			id:6,
			task:"Go to Gym",
			category:"Fitness",
			completed:false,
		},

		{
			id:7,
			task:"Go to buy books",
			category:"Education",
			completed:false,
		},

		{
			id:8,
			task:"Recall proce",
			category:"Finance",
			completed:false,
		},

		{
			id:9,
			task:"Go to market",
			completed:false,
		},

		{
			id:10,
			task:"Go to market",
			completed:false,
		},

		{
			id:11,
			task:"Go to market",
			completed:false,
		},

		{
			id:12,
			task:"Go to market",
			completed:false,
		},

		{
			id:13,
			task:"Go to market",
			completed:false,
		},

		{
			id:14,
			task:"Go to market",
			completed:false,
		},
		{
			id:15,
			task:"Go to market",
			completed:false,
		},
		{
			id:16,
			task:"Go to market",
			completed:false,
		},
		{
			id:17,
			task:"Go to market",
			completed:false,
		},
		{
			id:18,
			task:"Go to market",
			completed:false,
		},
		{
			id:19,
			task:"Go to market",
			completed:false,
		},
		{
			id:20,
			task:"Go to market",
			completed:false,
		},

	];


	let selectedCategory = categories[0];


	const categoriesContainer = document.querySelector(".categories");
	const categoryTitle = document.querySelector(".category-title");
	const totalcategoryTasks = document.querySelector(".category-tasks");
	const categoryImg = document.querySelector("#category-img");
	const totalTasks = document.querySelector(".totalTasks");
	const categoryChart = document.querySelector(".category-chart");



	const calculateTotal = () =>{
			const categoryTasks = tasks.filter((task) => task.category === selectedCategory.title);
			 categoryTasks.innerHTML = `${categoryTasks.length} Tasks`;
			 totalTasks.innerHTML = tasks.length;
	};





	const renderCategories = () =>{
		categoriesContainer.innerHTML = "";
		categories.forEach((category)=> {
			const categoryTasks = tasks.filter((task) => task.category === category.title);

			const div = document.createElement("div");
			div.classList.add("category");
			div.addEventListener("click", () =>{
				wrapper.classList.add("show-category");
				selectedCategory = category;
				categoryTitle.innerHTML = category.title;
				categoryImg.src = `${category.img}`;
				// categoryChart.innerHTML = task.category;

				calculateTotal();

				renderTask();
				

			});
			div.innerHTML = `
							<div class="left">
						<img src="${category.img}" alt="${category.title}" style="max-height: 6rem;">
						<div class="content">
							<h3>${category.title}</h3>
							<p>${categoryTasks.length} Tasks</p>
						</div>
					</div>
					<div class="options">
						<div class="toggle-btn">
							<i class="ri-more-2-line"></i>
						</div>
					</div>

			`;

			categoriesContainer.appendChild(div);

		});

	};


	const tasksContainer = document.querySelector(".tasks");

	const renderTask = () =>{
		tasksContainer.innerHTML="";
		const categoryTasks = tasks.filter((task) => task.category === selectedCategory.title);

		if(categoryTasks.length === 0){
			tasksContainer.innerHTML = `
				<p class="no-task">No Tasks for this Category</p>
			`;
		}else{
			categoryTasks.forEach((task)=>{
				const div = document.createElement("div");
				div.classList.add("task-wrapper");
				const label = document.createElement("label");
				label.classList.add("task");
				label.setAttribute("for", task.id);
				const checkbox = document.createElement("input");
				checkbox.type = "checkbox";
				checkbox.id = task.id;
				checkbox.checked.completed = task.completed;


				checkbox.addEventListener("change", () =>{
					const index = tasks.findIndex((t)=>t.id===task.id);

					tasks[index].completed = !task[index].completed;
					saveLocal();
				})

				div.innerHTML = `
					<div class="delete">
						<i class="ri-close-fill close"></i>
					</div>
				`;
				label.innerHTML = `
					<span class="checkmark">
							<i class="ri-check-double-line check"></i>
						</span>
						<p>${task.task}</p>
				`;

				label.prepend(checkbox);
				div.prepend(label);
				tasksContainer.appendChild(div);


				const deleteBtn = div.querySelector(".delete");
				deleteBtn.addEventListener("click", ()=>{
					const index = tasks.findIndex((t)=>t.id===task.id);

					tasks.splice(index,1);
					saveLocal();
					renderTask();

				})
			})
			renderCategories();
			calculateTotal();
		}

	};

	const saveLocal = () =>{
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}

	const getLocal = () =>{
		const localTasks = JSON.parse(localStorage.getItem("tasks"));

		if(localTasks){
			tasks = localTasks;
		}
	}



	const categorySelect = document.querySelector("#category-select");
	const cancelbtn = document.querySelector(".cancel-btn");
	const addbtn = document.querySelector(".add-btn");
	const taskInput = document.querySelector("#task-input");


	cancelbtn.addEventListener("click", toggleAddTaskForm);

	addbtn.addEventListener("click", ()=>{
		const task = taskInput.value;
		const category = categorySelect.value;

		if(task==""){
			alert("please enter a Task");
		}else{
			const newTask = {
				id: tasks.length + 1,
				task,
				category,
				completed: false,
			};
			tasks.push(newTask);
			taskInput.value="" ;
			saveLocal();
			toggleAddTaskForm();
			renderTask();

		}
	})

	categories.forEach((category) =>{
		const option = document.createElement("option")
		option.value = category.title.toLowerCase();
		option.textContent = category.title;
		categorySelect.appendChild(option);
	})


	const slideBar = document.querySelector(".barr");
	const slider = document.querySelector(".slide");
	const close = document.querySelector(".ri-close-fill");



	const showSlider = () =>{
			slider.style.transform="translate(80%)";
			slider.style.display="block";
	}

	close.addEventListener("click", () =>{
			slider.style.transform = "translateX(200%)";
	})

	slideBar.addEventListener("click", showSlider);
	// close.addEventListener("click", showSlider);




	const screenDrop = document.querySelector(".screen-backdrop");
	const colorpink = document.querySelector(".pink");
	const colorvoilet = document.querySelector(".voilet");
	const coloryellow = document.querySelector(".yellow");
	const colororange = document.querySelector(".orange");
	const colorRed = document.querySelector(".red");
	const colorBlue = document.querySelector(".blue");
	const colorGreen = document.querySelector(".green");

	const headWrapper = document.querySelector(".head-wrapper");
	const btn1 = document.querySelector(".menu-btn");
	const addTaskBtnColor = document.querySelector(".add-task-btn");
	const add1 = document.querySelector(".add");

	
	colorGreen.addEventListener("click", ()=>{
		screenDrop.style.backgroundColor="green";
		headWrapper.style.color = "white";
		btn1.style.color = "white";
		addTaskBtnColor.style.backgroundColor = "green";
		add1.style.color = "white";


	});

	colorRed.addEventListener("click", ()=>{
		screenDrop.style.backgroundColor="red";
		headWrapper.style.color = "white";
		btn1.style.color = "white";

	});

	coloryellow.addEventListener("click", ()=>{
		screenDrop.style.backgroundColor="#FFF5C2";
			headWrapper.style.color = "black";
		btn1.style.color = "black";
		addTaskBtnColor.style.backgroundColor = "#FFF5C2";
		add1.style.color = "black";

	});

	colorpink.addEventListener("click", ()=>{
		screenDrop.style.backgroundColor="pink";
			headWrapper.style.color = "black";
		btn1.style.color = "black";
		addTaskBtnColor.style.backgroundColor = "pink";
		add1.style.color = "black";

	});

	colororange.addEventListener("click", ()=>{
		screenDrop.style.backgroundColor="orange";
			headWrapper.style.color = "black";
		btn1.style.color = "black";
		addTaskBtnColor.style.backgroundColor = "orange";
		add1.style.color = "black";

	});

	colorvoilet.addEventListener("click", ()=>{
		screenDrop.style.backgroundColor="violet";
			headWrapper.style.color = "black";
		btn1.style.color = "black";
		addTaskBtnColor.style.backgroundColor = "violet";
		add1.style.color = "black";



	});
	colorBlue.addEventListener("click", ()=>{
		screenDrop.style.backgroundColor="#7071E8";
		headWrapper.style.color = "white";
		btn1.style.color = "white";
		addTaskBtnColor.style.backgroundColor = "#7071E8";
		add1.style.color = "white";

	});





	const button = document.querySelector(".button");
	const front = document.querySelector(".front");
	const text = document.querySelector(".textt");
	const nameChange = document.querySelector(".namechange");


	button.addEventListener("click", () =>{
		front.style.transform="translateY(-100%)"
		nameChange.innerHTML = `<span class="namechange">${text.value}.</span>`
	})




	getLocal();

	calculateTotal();
	renderCategories();
	renderTask();
