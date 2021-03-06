const userMessages = [];

const userMessageForm = document.querySelector('form');
const userMessagesList = document.querySelector('ul');
localStorage.setItem("mytime", Date.now());
function renderMessages() {
  let messageItems = '';
  for (const message of userMessages) {
    messageItems = `
      ${messageItems}
      <li class="message-item">
        <div class="message-image" style="width: 200px; height: 200px">
          <img src="${message.image}" alt="${message.text}">
        </div>
        <p>${message.text}</p>
      </li>
    `;
  }

  userMessagesList.innerHTML = messageItems;
}

// function escapeOutput(toOutput){
//   var lt = /</g, 
//   gt = />/g, 
//   ap = /'/g, 
//   ic = /"/g;
//   return toOutput.toString().replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
// }

function formSubmitHandler(event) {
  event.preventDefault();
  const userMessageInput = event.target.querySelector('textarea');
  const messageImageInput = event.target.querySelector('input');
  const userMessage = userMessageInput.value;
  const imageUrl = messageImageInput.value;
  // const userMessage = escapeOutput(userMessageInput.value);
  // const imageUrl = escapeOutput(messageImageInput.value);
  console.log(imageUrl);

  if (
    !userMessage ||
    !imageUrl ||
    userMessage.trim().length === 0 ||
    imageUrl.trim().length === 0
  ) {
    alert('Please insert a valid message and image.');
    return;
  }

  userMessages.push({
    text: userMessage,
    image: imageUrl,
  });

  userMessageInput.value = '';
  messageImageInput.value = '';

  renderMessages();
}

userMessageForm.addEventListener('submit', formSubmitHandler);
