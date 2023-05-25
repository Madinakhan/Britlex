const updateUserBtn = document.querySelector<HTMLButtonElement>("#update_user_btn")!;
const getUsersBtn = document.querySelector<HTMLButtonElement>("#get_users_btn")!;
const addUserBtn = document.querySelector<HTMLButtonElement>("#add_user")!;

const baseURL = "http://10.10.2.36:8080/api/users";

function delay(time = 1000) {
	return new Promise((res) => {
		setTimeout(() => res(20), time);
	});
}

const mockUser = {
	address: {
		state: "UZB",
		city: "Tashkent",
	},
	username: "arslonbek alimbaev",
	job: "PDP Mentor",
	email: "ars@domain.com",
	age: 10,
	name: "arslonbek",
};

getUsersBtn.addEventListener("click", async (e) => {
	await universal(e.target as HTMLButtonElement, "Loading Users...", async () => {
		const res = await fetch(baseURL);
		const { data } = await res.json();
		await delay();
		console.log("data = ", data);
	});
});

updateUserBtn?.addEventListener("click", async (e) => {
	await universal(e.target as HTMLButtonElement, "Loading Users...", async () => {
		const res = await fetch(`${baseURL}/1bf73e6e-1a76-4a68-a05a-d2a07b1ab0d6`, {
			method: "PUT",
			body: JSON.stringify(mockUser),
			headers: {
				"content-type": "application/json",
			},
		});
		const { data } = await res.json();
		await delay();
		console.log("data = ", data);
	});
});

addUserBtn?.addEventListener("click", () => {});

async function universal(btn: HTMLButtonElement, loadingMsg: string, fetchFn: () => Promise<any>) {
	try {
		const defaultText = btn.innerText;
		btn.innerText = loadingMsg;
		btn.disabled = true;

		await fetchFn();

		btn.innerText = defaultText;
		btn.disabled = false;
	} catch (err: any) {
		console.error(err);
	}
}
