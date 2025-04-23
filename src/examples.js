const exampleKeywords = [
    'marketing',
]

const exampleStructure = [
    'Role',
    'Goal',
    'Output Format',
    'Context',
    'Constraints / Style',
    'Examples',
]

const exampleMarketing = {
    'Role': 'You are a brand strategist with 10 years of experience, specializing in helping small and medium-sized businesses craft differentiated brand positioning.',
    'Goal': 'Please create a brand positioning statement for a new plant-based milk brand. The statement should include the following elements: target market, brand promise, unique selling proposition (USP), and brand tone description.',
    'Output Format': `
        Output the result as a Markdown-formatted list with clear subheadings for each of the following:
        1.	Target Market
        2.	Brand Promise
        3.	Unique Selling Proposition
        4.	Brand Tone
    `,
    'Context': 'The brand focuses on serving lactose-intolerant individuals and health-conscious young urban women. The product is additive-free and low in sugar. The brand name is OatMuse.',
    'Constraints / Style': 'Use a tone that is professional but friendly, marketing-savvy yet easy to understand. The total output should be under 300 words. Avoid using industry jargon or overly technical terms.',
    'Examples': []
}

const exampleProgramming = {
    'Role': 'You are a senior software engineer with expertise in writing clean, efficient, and well-documented code, especially in JavaScript and React.',
    'Goal': 'Please write a reusable React component that renders a searchable dropdown menu. The component should accept a list of options and a callback function to handle selection.',
    'Output Format': `
        Output the code as a single React functional component using modern ES6+ syntax.
        Include prop types and default props if applicable.
        Wrap the code in triple backticks with "jsx" for syntax highlighting.
        At the end, provide a short Markdown-formatted explanation of how the component works.
    `,
    'Context': 'The component will be used in a job application platform where users need to select their preferred job categories from a large dataset.',
    'Constraints / Style': 'Keep the code concise and readable. Use Tailwind CSS for styling. No external component libraries allowed, only built-in React hooks and features. Ensure accessibility (ARIA roles, keyboard support).',
    'Examples': []
}

const exampleEducation = {
    'Role': 'You are an experienced curriculum designer who specializes in creating engaging and age-appropriate lesson plans for high school students.',
    'Goal': 'Please design a 45-minute lesson plan on the topic of climate change, aimed at 10th grade students. The lesson should balance information delivery with student participation and critical thinking.',
    'Output Format': `
        Output the result in Markdown format with the following sections:
        1.	Learning Objectives
        2.	Materials Needed
        3.	Introduction (5-10 minutes)
        4.	Main Activities (25-30 minutes)
        5.	Wrap-Up / Assessment (5-10 minutes)
        6.	Optional Homework Assignment
    `,
    'Context': 'This lesson will be delivered in a public school setting with a diverse student population. The school emphasizes interactive learning and real-world applications. Students have access to laptops and internet during class.',
    'Constraints / Style': 'Use clear, accessible language suitable for 15-16 year olds. Activities should promote participation and discussion. No overly technical jargon or excessive lecturing. Encourage group work and multimedia use.',
    'Examples': []
}

const exampleWriting = {
    'Role': 'You are an award-winning fiction writer known for crafting emotionally resonant short stories with compelling characters and unique narrative voices.',
    'Goal': 'Please outline a short story based on the central theme of “isolation in a digital world.” The story should include character details, setting, plot structure, and central conflict.',
    'Output Format': `
        Provide the output in Markdown format with the following sections:
        1.	Title
        2.	Theme / Concept Summary
        3.	Main Characters (with names and short bios)
        4.	Setting Description
        5.	Plot Outline (structured as Beginning, Middle, and End)
        6.	Optional: Narrative Style / Tone suggestions
    `,
    'Context': 'The story is intended for a contemporary adult literary fiction magazine with a thoughtful, reflective tone. It should explore emotional depth but remain under 3000 words if developed.',
    'Constraints / Style': 'Avoid cliché tropes or dystopian exaggeration. Aim for subtle, character-driven storytelling. Use emotionally evocative language, but keep it grounded and relatable.',
    'Examples': []
}

const exampleJson = {
    "marketing": exampleMarketing,
    "programming": exampleProgramming,
    "education": exampleEducation,
    "writing": exampleWriting
}

/**
 * Extracts all values for a specific structure element from all examples
 * @param {string} structureKey - The structure key to extract (e.g., 'Role', 'Goal')
 * @returns {string[]} Array of values for the specified structure key from all examples
 */
const getAllStructureValues = (structureKey) => {
    if (!exampleStructure.includes(structureKey)) {
        console.warn(`Warning: "${structureKey}" is not a valid structure key`);
        return [];
    }

    const values = [];

    // Loop through all examples in exampleJson and extract the specified structure key
    Object.values(exampleJson).forEach(example => {
        if (example[structureKey]) {
            values.push(example[structureKey]);
        }
    });

    return values;
};

export { getAllStructureValues };