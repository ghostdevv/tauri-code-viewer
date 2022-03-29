<script>
    // This function will allow us to read a text file
    import { readTextFile } from '@tauri-apps/api/fs';

    // This gets the file extension which we will use as the prism language
    import { extname } from '@tauri-apps/api/path';

    // This opens a file picker
    import { open } from '@tauri-apps/api/dialog';

    let language;
    let contents;

    // Here we write our file picking function
    async function openFile() {
        // This function will return a file path, the options we give it are so the user can only select one file
        const [file] = await open({
            multiple: false,
            directory: false,
        });

        // If the file was test.js it would be js
        language = (await extname(file)) || 'text';

        // Get the file contents
        contents = await readTextFile(file);
    }

    openFile();
</script>

{contents}
