function truncateString(str, num) {
  
  if (num >= str.length) {
    return str.slice(0, num)
  } else if (num < str.length) {
    return str.slice(0, num) + "..."
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);