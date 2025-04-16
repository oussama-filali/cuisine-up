export async function generateUI(component, text, size, color, glassmorphism, framework) {
    return `<${component} style="color: ${color};">${text}</${component}>`;
}