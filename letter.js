async function encryptText(text, key) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    // 키 생성
    const subtleCrypto = window.crypto.subtle;
    const importedKey = await subtleCrypto.importKey(
        "raw",
        new TextEncoder().encode(key),
        { name: "AES-CBC" },
        false,
        ["encrypt"]
    );

    // 암호화
    const encryptedData = await subtleCrypto.encrypt(
        { name: "AES-CBC", iv: new Uint8Array(16) },
        importedKey,
        data
    );

    // ArrayBuffer를 Base64로 변환
    const encryptedText = btoa(String.fromCharCode(...new Uint8Array(encryptedData)));
    console.log(encryptText)

    return encryptedText;
}

async function decryptText(encryptedText, key) {
    // 키 생성
    const subtleCrypto = window.crypto.subtle;
    const importedKey = await subtleCrypto.importKey(
        "raw",
        new TextEncoder().encode(key),
        { name: "AES-CBC" },
        false,
        ["decrypt"]
    );

    // Base64를 ArrayBuffer로 변환
    const encryptedData = new Uint8Array(atob(encryptedText).split('').map(char => char.charCodeAt(0)));

    // 복호화
    const decryptedData = await subtleCrypto.decrypt(
        { name: "AES-CBC", iv: new Uint8Array(16) },
        importedKey,
        encryptedData
    );

    // ArrayBuffer를 문자열로 변환
    const decryptedText = new TextDecoder().decode(decryptedData);
    return decryptedText;
}



function decryptDay1(key){
    (async () => {
        encryptedText = 'nP4rnLvUCUzwF9JYXy87aBVhF6vd6APY8/P7HxwJs5xUQBwuNmLK3LFE+earaF+xR1QQFoEZbfJeVRU6iO03N3aLaPYP2bCYCsb5DSJvOHIoVJDQgeaSxCTzwJnedE7eTQcoxA+YOo1cUmpfZeb9bmQ+nuAnrrp44r99RX7HrJNAIuBjXxFCIgi7cmLsi+Rzs3v0xkcobikQxOYzibjvPbODjzT/LWKcNXV9iozTn/6GYH8UWrV7hy3y4ryqyoyYKxn0vLwy0G7IrmT/pPsDEdEL4G3z0/GSaZC9RJATr/Fx6g2X80fkTnely0klXGCC0WfiPCZ5GYskuI3V3M85McrYcGvhBaxogoqVFo/ejunZmLtB1/mEgJY9hQORZ+t+TTcJAFjzTWHn2UyPrU+HeMr4cdzY/G76oHILOiKil4HBJa3rVKegYfqxYE7ryFq5u1eT+RLYDXBem5055dvZm2yPieAEtJ5ixAa3bebGD6hAVDSesBgjU1wU90n2yOjZZB7pIg5HZIxWzU8sFV0j+k64D6wGk+TAbyJgnT+Bmtnm4FAAVttk37io0FpDH2RwQk7guo6d/weirpg8rneQefmSY54Bk35R2uCJEmCWkTEOdHGpi5VRAaf+URYvMThDiIW/fmCyyHpSZP515/W6RQ=='  
    
        const decryptedText = await decryptText(encryptedText, key);
        console.log("복호화된 텍스트:", decryptedText);
    })();
    return decryptText
}

function enc(key){
    (async () => {
        // encryptedText = 'TKieZsaOy82AFG2pvqnN6Q=='
        const encryptedText = await encryptText('txt', 1234123412341234);
        console.log("암호화된 텍스트:", encryptedText);
    })();
    return decryptText
}

