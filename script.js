(function () {
    const handle = 'ghosthasgone';
    const copyStatus = document.getElementById('copyStatus');
    const copyBadge = document.getElementById('copyBadge');
    const ctaButton = document.getElementById('ctaButton');

    async function copyHandle() {
        try {
            await navigator.clipboard.writeText(handle);
            copyStatus.textContent = 'Copied!';
            copyStatus.style.color = getComputedStyle(document.documentElement).getPropertyValue('--success').trim() || '#22c55e';
            setTimeout(() => {
                copyStatus.textContent = 'tap to copy';
                copyStatus.style.color = '';
            }, 2000);
        } catch {
            copyStatus.textContent = handle + ' (copy manually)';
        }
    }

    copyBadge.addEventListener('click', copyHandle);

    ctaButton.addEventListener('click', async () => {
        await copyHandle();
        // Try to open Discord client/web
        const discordUrl = 'discord://-/users/902924209754357850';
        try {
            window.open(discordUrl, '_blank', 'noopener');
        } catch {}
    });
}());