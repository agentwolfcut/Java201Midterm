// 65130500064 Phurikorn Saengsuwan
class Membership {
    static autoId = 1;

    constructor() {
        this.members = [];
    }

    subscribe(name) {
        const existingIndex = this.findMemberName(name);
        if (existingIndex !== -1) {
            return -1; 
        }
        const newMemberId = Membership.autoId++;
        this.members.push({ memberId: newMemberId, memberName: name });
        return this.members.length; 
    }

    unsubscribe(id) {
        if (id === undefined) {
            return -1;
        }
        const i = this.findMemberId(id);
        if (i !== -1) {
            this.members.splice(i, 1);
            return id;
        }
        return -1;
    }

    findMemberId(memberId) {
        return this.members.findIndex(member => member.memberId === memberId);
    }

    findMemberName(memberName) {
        const lowerCaseName = memberName.toLowerCase();
        return this.members.findIndex(member => member.memberName.toLowerCase() === lowerCaseName);
    }
}

const membership = new Membership();
console.log(membership.subscribe('Alison Butler')); 
console.log(membership.subscribe('Simon Brown'));   
console.log(membership.subscribe('Tim Carr'));      
console.log(membership.subscribe('Neil Davidson')); 
console.log(membership.subscribe('John Doe'));      
console.log(membership.unsubscribe(3));             

