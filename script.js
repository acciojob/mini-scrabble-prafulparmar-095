   const evaluatedText = document.getElementById('evaluatedText');
        const letterCount = document.getElementById('letterCount');
        evaluatedText.addEventListener('input', function() {
            const textLength = evaluatedText.value.length;
            letterCount.innerText = `Letter Count: ${textLength}`;
        });