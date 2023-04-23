// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 < 0.9.0;


// send, transfer, call의 기능과
// fallback ,receive의 차이점을 알 수 있는 코드

contract Bank{
    event JustFallback(address _from,string message);
    event RecevieFallback(address _from,uint256 _value ,string message);
    event JustFallbackWIthFunds(address _from,uint256 _value ,string message);

    // fallback() external {
    //   emit JustFallback(msg.sender,"JustFallback is called");
    // }
    receive() external payable {
      emit RecevieFallback(msg.sender, msg.value,"RecevieFallback is called");
    }
    
    
    fallback() external payable {
     emit JustFallbackWIthFunds(msg.sender, msg.value,"JustFallbackWIthFunds is called");
    }
  
}

contract You{

    //receve() 
    function DepositWithSend(address payable _to) public payable{
         bool success = _to.send(msg.value);
         require(success, "Failled" );
    }
    
    function DepositWithTransfer(address payable _to) public payable{
        _to.transfer(msg.value);
    }
    
    function DepositWithCall(address payable _to) public payable{
        (bool sent, ) = _to.call{value: msg.value}("");
        require(sent, "Failled" );
    }
    
    function JustGiveMessage(address _to) public{
        (bool success, ) = _to.call("HI");
        require(success, "Failled" );
    }
    
    function JustGiveMessageWithFunds(address payable _to) public payable{
        (bool success,) = _to.call{value:msg.value}("HI");
        require(success, "Failled" );
    }
    
}
