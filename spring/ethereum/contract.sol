pragma solidity ^0.5.11;

contract BCMess{
    event sendMessageEvent(address indexed from, address indexed to,bytes message, bytes32 encryption);
    event profileUpdateEvent(address indexed from, bytes32 name);

    struct User {
        uint messageStartBlock;
        bool isUser;
        int trustLevel;
        bytes32 publicKeyLeft;
        bytes32 publicKeyRight;
        bytes32 name;
    }

    mapping (address=> User) public users;

    function sendMessage(address to, bytes memory message, bytes32 encryption) public onlyMember {
        emit sendMessageEvent(msg.sender, to, message, encryption);
    }

    function join(bytes32 publicKeyLeft, bytes32 publicKeyRight) public onlyMember {
        require(users[msg.sender].isUser==false);
        User memory newUser = User(0, true, 5, publicKeyLeft, publicKeyRight, "");
        users[msg.sender] = newUser;
    }

    function updateProfile(bytes32 name, bytes32 avatarUrl) public onlyMember {
        users[msg.sender].name = name;
        emit profileUpdateEvent(msg.sender, name);
    }

    modifier onlyMember(){
        require(users[msg.sender].isUser==true);
        _;
    }
}