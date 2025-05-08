let data = [];
  let currentIndex = 0;
  let score = 0;
  let usedHint = false;

  async function loadData() {
    const res = await fetch('data.json');
    data = await res.json();
    shuffleArray(data);
    showQuestion();
  }

  function showQuestion() {
    if (currentIndex >= 10) {
      alert(`Spiel beendet! Dein Score: ${score}`);
      location.reload();
      return;
    }
  
    usedHint = false;
    const question = data[currentIndex];
    document.getElementById('politician-image').src = question.image;
    document.getElementById('hint').style.display = 'none';
    document.getElementById('hint').innerText = question.hint;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    question.options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'option-button';
      btn.innerText = option;
      btn.onclick = () => handleAnswer(option, question.correct, btn);
      optionsDiv.appendChild(btn);
    });
  }

  function handleAnswer(selected, correct, button) {
    const allButtons = document.querySelectorAll('.option-button');
    allButtons.forEach(btn => {
      btn.disabled = true;
      if (btn.innerText === correct) {
        btn.classList.add('correct');
      } else if (btn.innerText === selected) {
        btn.classList.add('incorrect');
      }
    });

    if (selected === correct) {
      score++;
      document.getElementById('score').innerText = score;
    }

    setTimeout(() => {
      currentIndex++;
      showQuestion();
    }, 1500);
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  document.getElementById('show-hint').addEventListener('click', (e) => {
    e.preventDefault();
    if (!usedHint) {
      usedHint = true;
      document.getElementById('hint').style.display = 'block';
    }
  });

  document.getElementById('help').addEventListener('click', () => {
    document.getElementById('help-modal').style.display = 'flex';
  });

  function closeHelp() {
    document.getElementById('help-modal').style.display = 'none';
  }

  loadData();