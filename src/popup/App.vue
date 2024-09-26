<script>
export default {
    mounted() {
        this.$refs.serchInput.focus();
    },
    methods: {
        handleEnterPress(event) {
            const query = event.target.value;
            if (query) {
                chrome.tabs.create({
                    url: `https://www.google.com/search?q=${encodeURIComponent(
                        query
                    )}`,
                });
            }
        },
    },
};
</script>

<template>
    <main>
        <h1 class="tab-headline">New SerchBox</h1>
        <div class="tab-wrapper">
            <div class="tab-serch">
                <div class="serch-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 
                40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                        />
                    </svg>
                </div>
                <input
                    ref="serchInput"
                    type="text"
                    class="serch-input"
                    @keypress.enter="handleEnterPress"
                />
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 150px;
}
.tab-headline {
    text-align: center;
    font-family: "Georama", sans-serif;
    margin-top: 0;
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
