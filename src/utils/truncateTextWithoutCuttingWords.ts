export const truncateTextWithoutCuttingWords = (text: string, limit: number): string => {
    if (text.length <= limit) return text;

    let trimmedText = text.slice(0, limit);
    let lastSpaceIndex = trimmedText.lastIndexOf(" ");

    return lastSpaceIndex > 0 ? trimmedText.slice(0, lastSpaceIndex) + "..." : trimmedText + "...";
}
