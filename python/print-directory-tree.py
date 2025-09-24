import os

def print_folder_tree(start_path):
    """
    Prints a visual representation of the folder tree starting from the given path.
    """
    for root, dirs, files in os.walk(start_path):
        level = root.replace(start_path, '').count(os.sep)
        indent = ' ' * 4 * (level)
        print(f'{indent}{os.path.basename(root)}/')
        subindent = ' ' * 4 * (level + 1)
        for f in files:
            print(f'{subindent}{f}')

# Example usage:
# Replace '.' with the path to the directory you want to display
print_folder_tree('.')