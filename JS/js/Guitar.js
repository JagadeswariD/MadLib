/* const guitar = ()=>{
    console.log("Playing guitar");
};
const shredding = () =>{
    console.log("Shredding some licks");
};
const plucking = () => {
    console.log("Plucking the strings");
}; */

/*export default guitar; //default export - only one default export is allowed and while importing u can give any name to it
export {shredding, plucking};*/ //named export - can have more named export, user should be aware of the methods names

// inline export
export default function guitar (){
    console.log("Playing guitar");
};
export const shredding = () =>{
    console.log("Shredding some licks");
};
export const plucking = () => {
    console.log("Plucking the strings");
};