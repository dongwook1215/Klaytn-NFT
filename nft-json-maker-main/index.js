const nftName = "HomeworkManagement";
const description = "This is HomeworkManagement NFT by using KLAY";
const hiddenImgUrl = "ipfs://QmdSdtkRQHDSYauPzXqEj9gYGjnJdRZN3Luxek7SSxWiHr";
const totalNum = 100;

try {
    for (let i = 1; i <= totalNum; i++) {
        let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${hiddenImgUrl}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
        let fs = require("fs");
        fs.writeFile(`json/${i}.json`, json, "utf8", (e)=>(e));
    }
    console.log("complete!");
} catch (error) {
    console.log(error);
}
