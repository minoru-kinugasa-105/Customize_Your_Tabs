<script>
export default {
  mounted() {
    document.getElementById('serch-input').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(this.value)}`;
      }
    });
    document.getElementById('serch-input').focus();
  }
}
</script>

<template>
    <main>
        <h1 class="tab-headline">
            Custom New Tab
        </h1>
        <div class="tab-wrapper">
            <div class="tab-serch">
                <div class="serch-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5
                            32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 
                            40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                        />
                    </svg>
                </div>
                <input type="text" id="serch-input" class="serch-input" autofocus />
            </div>
        </div>
    </main>
</template>

<style scoped>
#app {
    margin-top: 60px;
}

main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 30vh;
}
.tab-headline {
    text-align: center;
    font-family: "Georama", sans-serif;
}
.tab-wrapper {
    width: max-content;
    display: block;
    margin-inline: auto;
}
.tab-serch {
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px var(--gray);
    height: 45px;
    border-radius: 22.5px;
    padding: 0 1rem;
}
.tab-serch:hover {
    box-shadow: 0 0 2px 2px var(--gray-transparent);
}
.serch-icon {
    width: 15px;
    height: 15px;
}
.serch-icon svg {
    display: block;
    margin-inline: auto;
    width: 15px;
    height: 15px;
}
.serch-icon svg path {
    fill: var(--gray);
}
.serch-input {
    width: 450px;
    height: 30px;
    border: 0;
    outline: none;
    font-size: 1rem;
    margin: 0 1rem;
}
</style>

<!-- "theme": {
    "colors": {
        "frame": [255, 255, 255],
        "toolbar": [255, 255, 255],
        "background_tab": [230, 230, 230],
        "text": [0, 0, 0],
        "button_background": [173, 216, 230],
        "button_text": [0, 0, 0]
    }
} -->
