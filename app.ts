// 1) создать интерфейс на основе этого объекта:

interface ICore {
    flight: number,
    core: {
        reuse_count: number,
        status: string
    }
}

interface IPayload {
    payload_type: string,
    payload_mass_kg: number,
    payload_mass_lbs: number
}

interface ISpaceX {
    mission_name: string,
    launch_date_local: string,
    launch_site: {
        site_name_long: string
    },
    links: {
        article_link: string,
        video_link: string
    },
    rocket: {
        rocket_name: string,
        first_stage: {
            cores: ICore[]
        },
        second_stage: {
            payloads: IPayload[]
        }
    }
}

// ------------------—————————
// 2) протипизировать функции:
interface IUser {
    name: string,
    age: number,
    gender: string
}

const user: IUser = {
    name: 'Max',
    age: 18,
    gender: 'male'
}

const sum = (a: number, b: number): number => a + b;

const showSum = (a: number, b: number): void => {
    console.log(a + b);
};

const incAge = (someUser: IUser, inc: number): IUser => {
    someUser.age += inc
    return someUser
};

console.log(sum(1, 2));
showSum(2, 3)
incAge(user, 2)

type Name = 'Max' | 'Kira' | 'Karina' | 'Helena'

interface INewUser {
    id?: number
    name: Name
}

interface INewUser2 extends INewUser {
    age: number
}

const newUser: Required<INewUser> = {name: 'Kira', id: 2}
const newUser2: Required<INewUser2> = {name: 'Kira', id: null, age: 25}

class User {
    constructor(public name: string, public age: number) {
    }

    getName(): string {
        return this.name
    }
}

interface functional {
    getAge: () => number
}

class User2 extends User implements functional {
    constructor(name: string, age: number) {
        super(name, age);
    }
    getAge(): number {
        return this.age;
    }
}