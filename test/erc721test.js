
const character = artifacts.require("CharactorByERC721");


contract('ERC721', (accounts) => {

    beforeEach( async () => {

        c = await character.deployed();

    })

    it('Basic test', async() => {

        // 토큰을 mint로 생성
        //const result = await c.mint("Kim2",accounts[0]);


        // balanceof 사용 : 입력한 owner가 소유한 token 개수 return
        // const r = await c.balanceOf("0x7f1C9472512222c6B7CdFaa168981A666f69DD1b");
        
        //tranferfrom 을 사용: from 에서 to로 tokenID의 토큰을 전송
        const e = await c.transferFrom("0x7f1C9472512222c6B7CdFaa168981A666f69DD1b","0x571239eE475c46ADb2AC0Deda2Cb1af07dca90bc",1);

        // ownerof 사용 : tokenID의 owner을 return
        const r = await c.ownerOf(1);


        // Need approve test
        console.log(r);
        console.log(e);
    })


});
