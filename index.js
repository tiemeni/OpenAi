const { default: OpenAI } = require("openai");
const openai = new OpenAI({
    organization: "org-u6ikKUcNAymEr6R5r76svu4i",
    project: "proj_ploq1a874OwOPLIXw72jjKiz",
});

(async function processOpenAi(){
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: "Write a haiku about recursion in programming.",
            },
        ],
    });
    
    console.log(completion.choices[0].message);
})();